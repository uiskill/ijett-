import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import Sidebar from './adminlayout/Sidebar';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import CommonPagination from './CommonPagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaperList = () => {
  const [papers, setPapers] = useState([]);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const papersPerPage = 10;
  const navigate = useNavigate();

  // Fetch papers
  useEffect(() => {
    axios.get('http://localhost/backend/api/get_papers.php')
      .then(res => {
        setPapers(res.data.papers || []);
      })
      .catch(err => {
        console.error('Error fetching papers:', err);
        setError('Failed to load papers');
      });
  }, []);

  const totalPages = Math.ceil(papers.length / papersPerPage);
  const indexOfLastPaper = currentPage * papersPerPage;
  const indexOfFirstPaper = indexOfLastPaper - papersPerPage;
  const currentPapers = papers.slice(indexOfFirstPaper, indexOfLastPaper);

const handleEdit = (id) => {
  navigate(`/edit-paper/${id}`); 
};




  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this paper?")) {
      axios.post('http://localhost/backend/api/delete_paper.php', { id })
        .then(res => {
          if (res.data.success) {
            toast.success('Paper deleted successfully');
            setPapers(prev => prev.filter(paper => paper.id !== id));
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

  return (
    <>
      <Sidebar />
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />
        <div className="container-fluid p-3">

         <div className="card p-4 mb-3">
          <h3 className="text-left"><strong>Submitted Papers</strong></h3>
  

          {error && <div className="alert alert-danger">{error}</div>}

          {papers.length === 0 ? (
            <p>No papers found.</p>
          ) : (
            <table className="table table-bordered table-striped">
              <thead>
                <tr style={{ backgroundColor: "#ccc" }}>
                  <th>Sr.no</th>
                  <th>Title</th>
                  <th>Authors of Papers</th>
                  <th>Issue</th>
                  <th>Paper</th>
                  <th width="7%">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPapers.map((paper, index) => (
                  <tr key={paper.id}>
                    <td>{indexOfFirstPaper + index + 1}</td>
                    <td>{paper.title}</td>
                    <td>{paper.editor_name}</td>
                    <td>{paper.issue_title}</td>
                    <td>
                      <a
                        href={`http://localhost/backend/uploads/${paper.file_path}`}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-success"
                      >
                        <FaFilePdf />
                      </a>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(paper.id)}>
                         <FaEdit />
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDelete(paper.id)}>
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

export default PaperList;
