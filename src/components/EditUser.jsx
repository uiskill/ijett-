import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from './adminlayout/Sidebar';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditUser = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
 useEffect(() => {
  if (id) {
    axios.get(`http://localhost/backend/api/get_user_by_id.php?id=${id}`)
      .then(res => {
        if (res.data.success) {
          setFormData({
            id: id, // 👈 important!
            username: res.data.user.username,
            password: res.data.user.password
          });
        } else {
          toast.error('User not found');
        }
      })
      .catch(err => {
        toast.error('Failed to load user data');
        console.error(err);
      });
  }
}, [id]);

  // Handle form change
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit updated user
 const handleSubmit = async e => {
  e.preventDefault();

  try {
    const res = await axios.post(
      'http://localhost/backend/api/update_user.php',
      {
        id: parseInt(id),
        username: formData.username,
        password: formData.password
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (res.data.success) {
      toast.success(res.data.message);
      setTimeout(() => navigate('/list-user'), 1000);
    } else {
      toast.error(res.data.message || 'Update failed');
    }
  } catch (err) {
    console.error('Update error:', err);
    toast.error('Server error during update');
  }
};


  return (
    <>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
        <div className="container-fluid">
          <div class="card p-4">
          <h3><strong>Edit User</strong></h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label><strong>Username</strong></label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label><strong>Password</strong></label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update User
            </button>
          </form>
        </div></div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </div>
    </>
  );
};

export default EditUser;
