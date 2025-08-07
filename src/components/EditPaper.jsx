import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './adminlayout/Sidebar';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPaper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [paper, setPaper] = useState({
    title: '',
    abstract: '',
    author_id: '',
    editor_name: '',
    issue_id: '',
    file_path: ''
  });

  const [issues, setIssues] = useState([]);
  const [newFile, setNewFile] = useState(null);

  useEffect(() => {
    // Fetch paper by ID
    axios.get(`http://localhost/backend/api/get_papersby_id.php?id=${id}`)
      .then((res) => {
        if (res.data.success) {
          setPaper(res.data.paper);
        } else {
          toast.error('Failed to load paper data');
        }
      })
      .catch((err) => {
        console.error('Error fetching paper:', err);
        toast.error('Error loading paper');
      });

    // Fetch all issues for dropdown
   

  }, [id]); // ✅ don't forget the dependency array

  const handleChange = (e) => {
    setPaper({ ...paper, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setNewFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', paper.title);
    formData.append('abstract', paper.abstract);
    formData.append('author_id', paper.author_id);
    formData.append('editor_name', paper.editor_name);
    formData.append('issue_id', paper.issue_id);
    if (newFile) {
      formData.append('file', newFile);
    }

    axios.post('http://localhost/backend/api/update_paper.php', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        if (res.data.success) {
          toast.success('Paper updated successfully!');
           setTimeout(() => navigate('/view-paper'), 1000);
     
        } else {
          toast.error('Update failed');
        }
      })
      .catch(err => {
        console.error('Error updating paper:', err);
        toast.error('Error updating paper');
      });
  };

  return (
    <>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
        <div className="card p-4 text-left mt-5 m-5 mb-5">
          <h2><strong>Edit Paper</strong></h2>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              <label><strong>Title:</strong></label><br />
              <input
                type="text"
                name="title"
                required
                className="form-control"
                value={paper.title}
                onChange={handleChange}
              /><br />
            </div>

            <div>
              <label><strong>Abstract:</strong></label><br />
              <textarea
                name="abstract"
                required
                className="form-control"
                value={paper.abstract}
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
                value={paper.author_id}
                onChange={handleChange}
              /><br />
            </div>

            <div>
              <label><strong>Authors List:</strong></label><br />
              <input
                type="text"
                name="editor_name"
                required
                className="form-control"
                value={paper.editor_name}
                onChange={handleChange}
              /><br />
            </div>


            <div>
              <label><strong>Upload New Paper (PDF):</strong></label><br />
              <input
                type="file"
                name="file"
                accept=".pdf"
                className="form-control"
                onChange={handleFileChange}
              /><br />
              {paper.file_path && (
                <a
                  href={`http://localhost/backend/uploads/${paper.file_path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-info"
                >
                  View Current File
                </a>
              )}
            </div>

            <button type="submit" className="btn btn-success mt-3">Update Paper</button>
          </form>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
};

export default EditPaper;
