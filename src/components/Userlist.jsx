import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './adminlayout/Header';
import Sidebar from './adminlayout/Sidebar';
import Footer from './adminlayout/Footer';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost/backend/api/get_user.php')
      .then(res => {
        if (res.data.success && Array.isArray(res.data.users)) {
          setUsers(res.data.users);
        } else {
          toast.error('Failed to fetch users');
        }
      })
      .catch(() => toast.error('Error loading users'));
  }, []);

  // Navigate to edit page
  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios.post('http://localhost/backend/api/delete_user.php', { id })
        .then(res => {
          if (res.data.success) {
            toast.success("User deleted successfully");
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
          } else {
            toast.error(res.data.message || "Failed to delete user");
          }
        })
        .catch(err => {
          console.error("Delete error:", err);
          toast.error("Server error while deleting user");
        });
    }
  };

  // Navigate to add user form
  const handleAddUser = () => {
    navigate('/add-user');
  };

  return (
    <>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
  
        <div className="container-fluid ">
          <div className="card p-4 m-3">
          <div className="d-flex justify-content-between align-items-center ">
            <h4><strong>User List</strong></h4>
            <button className="btn btn-primary btn-sm" onClick={handleAddUser}>
              + Add User
            </button>
          </div>
 <br/>

          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info me-2"
                      onClick={() => handleEdit(user.id)}
                    >
                      <FaEdit />
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(user.id)} >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div></div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Footer />
      </div>
    </>
  );
};

export default UserList;
