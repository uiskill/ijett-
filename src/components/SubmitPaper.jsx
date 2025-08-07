import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import Sidebar from './adminlayout/Sidebar';
import { ToastContainer, toast } from 'react-toastify';

const SubmitPaper = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    author_id: '',
    issue_id: '',
    editor_name: '',
    file: null,
  });

  const [issues, setIssues] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    axios.get('http://localhost/backend/api/get_issues.php')
      .then(res => {
        console.log('API response:', res.data);
        // Adjust this if your API returns array directly or wrapped in an object
        if (Array.isArray(res.data)) {
          setIssues(res.data);
          setError('');
        } else if (res.data.issues && res.data.issues.length > 0) {
          setIssues(res.data.issues);
          setError('');
        } else {
          setError('No issues found');
        }
      })
      .catch(err => {
        console.error('API fetch error:', err);
        setError('Failed to load issues');
      });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'file') {
      setFormData((prev) => ({ ...prev, file: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.file || formData.file.type !== 'application/pdf') {
      setError('Please upload a valid PDF file');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('abstract', formData.abstract);
    data.append('author_id', formData.author_id || 1);
    data.append('issue_id', formData.issue_id);
    data.append('editor_name', formData.editor_name);
    data.append('file', formData.file);

    try {
      const res = await axios.post('http://localhost/backend/api/submit_paper.php', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (res.data.message) {
        setMessage(res.data.message);
        setFormData({ title: '', abstract: '', author_id: '', issue_id: '', editor_name: '', file: null });
        setError('');

        setTimeout(() => {
          navigate('/view-paper'); // ✅ Adjust this route as per your app
        }, 2000);
      } else {
        setError('Unknown error occurred');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setError('Submission failed. Please try again.');
    }
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (message) {
      toast.success(message);
    }
  }, [error, message]);


  return (
    <>
      <Sidebar />

      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
<div className='container-fluid'>
        <div className="card p-4 text-left  mb-3">
          <h3><strong>Submit Paper</strong></h3>



          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label className="text-left"><strong>Title:</strong></label><br />
              <input
                type="text"
                name="title"
                required
                className="form-control"
                value={formData.title}
                onChange={handleChange}
              /><br />
            </div>

            <div>
              <label><strong className="">Abstract:</strong></label><br />
              <textarea
                name="abstract"
                required
                className="form-control"
                value={formData.abstract}
                onChange={handleChange}
              ></textarea><br />
            </div>

            <div>
              <label><strong>Author ID:</strong></label><br />
              <input
                type="number"
                name="author_id"
                required
                className="form-control"
                value={formData.author_id}
                onChange={handleChange}
              /><br />
            </div>

            <div>
              <label><strong>Editors:</strong></label><br />
              <input
                type="text"
                name="editor_name"
                required
                className="form-control"
                value={formData.editor_name}
                onChange={handleChange}
              /><br />
            </div>

            <div>
              <label><strong>Select Issue:</strong></label><br />
              <select
                name="issue_id"
                required
                className="form-control"
                value={formData.issue_id}
                onChange={handleChange}
              >
                <option value="">-- Select Issue --</option>
                {issues.length > 0 ? (
                  issues.map((issue) => (
                    <option key={issue.id} value={issue.id}>
                      {issue.title}
                    </option>
                  ))
                ) : (
                  <option disabled>No issues found</option>
                )}
              </select><br />
            </div>

            <div>
              <label><strong>Upload Papers:</strong></label><br />
              <input
                type="file"
                name="file"
                accept=".pdf"
                required
                className="form-control"
                onChange={handleChange}
              /><br />
            </div>

            <button type="submit" className="btn btn-success" style={{ marginTop: '10px' }}>Submit Paper</button>
          </form>
        </div></div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </div>
    </>
  );
};

export default SubmitPaper;
