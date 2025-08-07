import React, { useState, useEffect } from 'react';
import {  useParams, useNavigate } from 'react-router-dom';
import Header from './adminlayout/Header';
import Sidebar from './adminlayout/Sidebar';
import Footer from './adminlayout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';



const Adduser = () => {
    const { id } = useParams(); // If id exists, it's edit mode
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });



  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let url = id
      ? 'http://localhost/backend/api/update_user.php'
      : 'http://localhost/backend/api/add_user.php'; // ✅ FIXED HERE

    const payload = id
      ? { id, ...formData } // include ID when updating
      : formData;

    const res = await axios.post(url, payload);

    if (res.data.success) {
      toast.success(res.data.message);
      setTimeout(() => navigate('/list-user'), 1000);
    } else {
      toast.error(res.data.message || 'Operation failed');
    }
  } catch (err) {
    toast.error('Server error');
    console.error(err);
  }
};
  return (
    <div>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
        <div className="container-fluid">
          <div className="card p-5 mb-5 mt-5">
            <h2><strong> Add New User</strong></h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="form-control"
                value={formData.username}
                onChange={handleChange}
              /><br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="form-control"
                value={formData.password}
                onChange={handleChange}
              /><br />
              <button type="submit" className="btn btn-success">Add User</button>
            </form>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Adduser;
