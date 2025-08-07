import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import { useNavigate } from 'react-router-dom';
import Sidebar from './adminlayout/Sidebar';
 import { ToastContainer, toast } from 'react-toastify';

const CreateIssue = () => {
  const [formData, setFormData] = useState({
    volume: '',
    issue_number: '',
    title: '',
    publication_date: '',
        year: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Reset messages
  setMessage('');
  setError('');

  try {
    const response = await axios.post('http://localhost/backend/api/create_issue.php', formData);

    if (response.data.message) {
      setMessage(response.data.message);
      setFormData({
        volume: '',
        issue_number: '',
        title: '',
        publication_date: '',
        year: ''
      });

      setError('');

      // Navigate after success with delay
      setTimeout(() => {
        navigate('/list-issue'); // ✅ Update this route if needed
      }, 2000);
    } else {
      setError('Unexpected response from server');
    }
  } catch (err) {
    setError('Error submitting issue: ' + (err.response?.data?.message || err.message));
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
    <Sidebar/>
 <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
      <Header/>

      <div class="container-fluid mb-3  mt-3">

        <div class="card p-4">
      <h3 class="text-left"><strong>Create New Journal Issue</strong></h3>
      <form onSubmit={handleSubmit}>

  <input
          type="text"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          required
          class="form-control"
        /><br />


        <input
          type="number"
          name="volume"
          placeholder="Volume"
          value={formData.volume}
          onChange={handleChange}
          required
          class="form-control"
        /><br />

        <input
          type="number"
          name="issue_number"
          placeholder="Issue Number"
          value={formData.issue_number}
          onChange={handleChange}
          required
          class="form-control"
        /><br />

        <input
          type="text"
          name="title"
          placeholder="Issue Title"
          value={formData.title}
          onChange={handleChange}
          required
          class="form-control"
        /><br />

        <input
          type="date"
          name="publication_date"
          value={formData.publication_date}
          onChange={handleChange}
          required
          class="form-control"
        /><br />

        <button type="submit" className="btn btn-success">Create Issue</button>
      </form>

  
      
</div>

<ToastContainer position="top-right" autoClose={3000} />
      </div>

      <Footer/>
    </div>
    </>
  );
};

export default CreateIssue;
