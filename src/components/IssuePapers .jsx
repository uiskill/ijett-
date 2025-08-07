import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SearchIssue from './SearchIssue';
import CommonPagination from './CommonPagination';
import { FaFilePdf } from "react-icons/fa6";
import AdminLogin from './AdminLogin';

const IssuePapers = () => {
  const { id } = useParams(); // issue_id from URL
  const [papers, setPapers] = useState([]);
  const [issueTitle, setIssueTitle] = useState('');
  const [error, setError] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const papersPerPage = 4;

  useEffect(() => {
    // Get issue info (optional)
    axios.get(`http://localhost/backend/api/get_issues.php`)
      .then(res => {
        const issue = res.data.issues.find(i => i.id === parseInt(id));
        if (issue) setIssueTitle(issue.title);
      });

    // Get papers
    axios.get(`http://localhost/backend/api/get_papers_by_issue.php?issue_id=${id}`)
      .then(res => setPapers(res.data.papers || []))
      .catch(() => setError('Failed to load papers'));
  }, [id]);

  const totalPages = Math.ceil(papers.length / papersPerPage);
  const indexOfLastPaper = currentPage * papersPerPage;
  const indexOfFirstPaper = indexOfLastPaper - papersPerPage;
  const currentPapers = papers.slice(indexOfFirstPaper, indexOfLastPaper);

  return (
    <div>
      <Header />

      <section id="courses-events" className="courses-events section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8">
              {currentPapers.map((paper) => (
                <article className="event-card" key={paper.id}>
                  <div className="row g-0">
                    <div className="col-md-12">
                      <div className="event-content">
                        <div className="row g-0">
                          <div className="col-sm-11">
                            <h6 className="event-title">
                              <strong>{paper.title}</strong>
                            </h6>
                            <div className="instructor">
                              <mark><small><em><strong>{paper.editor_name}</strong></em></small></mark>
                            </div>
                          </div>
                          <div className="col-md-1 text-right">
                            <a
                              href={`http://localhost/backend/uploads/${paper.file_path}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-info"
                            >
                                 <strong>PDF</strong>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              <CommonPagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
            </div>

            <div className="col-lg-4">
              <SearchIssue />
    
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IssuePapers;
