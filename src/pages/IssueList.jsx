import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CommonPagination from '../components/CommonPagination';

const IssueList = () => {

  const [issues, setIssues] = useState([]);
  const [error, setError] = useState('');



  const [currentPage, setCurrentPage] = useState(1);
  const issuesPerPage = 7;




const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost/backend/api/get_issues.php')
      .then(res => {
        if (res.data.issues) {
          setIssues(res.data.issues);
        } else {
          setError('No issues found');
        }
      })
      .catch(() => setError('Failed to load issues'));
  }, []);


  const totalPages = Math.ceil(issues.length / issuesPerPage);
  const indexOfLastIssues = currentPage * issuesPerPage;
  const indexOfFirstIssues = indexOfLastIssues - issuesPerPage;
  const currentIssues = issues.slice(indexOfFirstIssues, indexOfLastIssues);


  return (
    <div>
      <Header />
      
      <section id="pricing" className="pricing section">
        <div className="container pricing-toggle-container" >
          <div className="row gy-4 justify-content-center">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!error && issues.length === 0 && <p>No issues found.</p>}

            {currentIssues.map((issue) => (
              <div className="col-lg-12 col-md-6" key={issue.id} style={{ marginBottom: '3px' }}>
                <div className="pricing-item popular">
                  <div className="pricing-header">
                    {/* <h6 className="pricing-category">
                      <strong>Volume {issue.volume}, Issue {issue.issue_number}</strong>
                    </h6>*/}
                    <div class="popular-badge">{issue.year}</div>
                    <div className="price-wrap">
                      
                      <h6
  className="price"
  style={{ cursor: 'pointer', color: '#3c7d5c'}}
  onClick={() => navigate(`/issue/${issue.id}`)} // 👈 Navigate to detail page
>
  {issue.title}
</h6>
                    </div>
                  </div>
                </div>
              </div>
            ))}


          <CommonPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IssueList;
