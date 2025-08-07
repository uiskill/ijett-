import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import Sidebar from './adminlayout/Sidebar';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import CommonPagination from '../components/CommonPagination';
import { ToastContainer, toast } from 'react-toastify';

const ListIssue = () => {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const issuesPerPage = 10;

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = () => {
    axios.get('http://localhost/backend/api/get_issues.php')

      .then(res => {
        if (res.data.issues) {
          setIssues(res.data.issues);
        } else {
          setIssues([]);
          setError('No issues found');
        }
      })
      .catch(() => setError('Failed to load issues'));
  };



 const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this paper?")) {
    axios.post('http://localhost/backend/api/delete_paper.php', { id })
        .then(res => {
          if (res.data.success) {
          setIssues(prev => prev.filter(issue => issue.id !== id));
            toast.success('Paper deleted successfully');
            
          } else {
            toast.error('Failed to delete paper');
          }
        })
        .catch(err => {
          console.error('Delete error:', err);
          toast.error('Error deleting paper');
        });
    }
  };

















  const handleEdit = (id) => {
    navigate(`/edit-issue/${id}`);
  };

  const totalPages = Math.ceil(issues.length / issuesPerPage);
  const indexOfLastIssues = currentPage * issuesPerPage;
  const indexOfFirstIssues = indexOfLastIssues - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssues, indexOfLastIssues);

  return (
    <>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
        <div className="container-fluid mt-4 p-3">

          <div className="card p-4 mb-4">
          <h3 className="text-left"><strong>Issue List</strong></h3>
          {error && <div className="alert alert-warning">{error}</div>}

          {issues.length === 0 ? (
            <p>No issues found.</p>
          ) : (
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>SR No</th>
                  <th>Title</th>
                  <th>Volume</th>
                  <th>Issue</th>
                  <th>Year</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentIssues.map((issue, index) => (
                  <tr key={issue.id}>
                    <td>{indexOfFirstIssues + index + 1}</td>
                    <td>{issue.title}</td>
                    <td>{issue.volume}</td>
                    <td>{issue.issue_number}</td>
                    <td>{issue.year}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(issue.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(issue.id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
</div>
          <CommonPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <ToastContainer position="top-right" autoClose={3000} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ListIssue;
