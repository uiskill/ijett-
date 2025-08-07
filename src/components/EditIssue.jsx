import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './adminlayout/Sidebar';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditIssue = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Make sure this is valid in your route context

  const [issue, setIssue] = useState({
    volume: '',
    issue_number: '',
    title: '',
    year: ''
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost/backend/api/get_issue_by_id.php?id=${id}`)
        .then(res => {
          if (res.data.success) {
            setIssue(res.data.issue);
          } else {
            setMessage('Issue not found');
          }
        })
        .catch(err => {
          setMessage('Failed to load issue data');
          console.error(err);
        });
    }
  }, [id]);


  const handleChange = (e) => {
    setIssue({
      ...issue,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const updatedIssue = { ...issue, id };

  axios.post('http://localhost/backend/api/update_issue.php', updatedIssue)
    .then(res => {
      if (res.data.success) {
       toast.success('Issue updated successfully!');
        setTimeout(() => navigate('/list-issue'), 1000);
      } else {
        toast.error('Failed to update issue');
      }
    })
    .catch(err => {
      console.error('Update error:', err.response?.data || err.message);
      toast.error('Error while updating');
    });
};


  return (
    <>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
        <div className="container-fluid mt-4 p-4">
          <div class="card p-4">
            <h3><strong>Edit Issue</strong></h3>
            {message && <div className="alert alert-warning">{message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label"><strong>Volume</strong></label>
                <input
                  type="text"
                  className="form-control"
                  name="volume"
                  value={issue.volume}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><strong>Issue Number</strong></label>
                <input
                  type="text"
                  className="form-control"
                  name="issue_number"
                  value={issue.issue_number}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><strong>Title</strong></label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={issue.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label"><strong>Year</strong></label>
                <input
                  type="number"
                  className="form-control"
                  name="year"
                  value={issue.year}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">Update Issue</button>
            </form>
             
          </div>
             
          
          <ToastContainer position="top-right" autoClose={3000} />
          </div>
          
        <Footer />
      </div>
    </>
  );
};

export default EditIssue;
