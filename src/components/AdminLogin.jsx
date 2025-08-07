import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost/backend/api/admin_login.php', formData);
      if (res.data.success) {
        localStorage.setItem('admin', JSON.stringify(res.data.admin));
        navigate('/admin-dashboard');
      } else {
        setError(res.data.message || 'Invalid login credentials');
      }
    } catch (err) {
      setError('Login failed. Server error.');
    }
  };

  return (
    <div>
      <Header />
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ minHeight: '80vh' }}
      >
        <div className="card col-sm-5 text-center p-5">
          <div className="text-center pb-4">
            <img
              src="/img/logo.png"
              alt="Logo"
              style={{ maxWidth: '251px' }}
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="form-control mb-3"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="form-control mb-3"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
