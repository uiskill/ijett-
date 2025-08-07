import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SearchIssue = () => {
  const [issues, setIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost/backend/api/get_issues.php')
      .then(res => {
        if (res.data.issues) {
          setIssues(res.data.issues);
        }
      })
      .catch(err => {
        console.error('Failed to fetch issues:', err);
      });
  }, []);

  const handleChange = (e) => {
    const issueId = e.target.value;
    setSelectedIssue(issueId);
    if (issueId) {
      navigate(`/issue/${issueId}/papers`);
    }
  };

  return (
    <div className="sidebar-widget filter-widget">
      <h1 className="widget-title"><strong>Issue List</strong></h1>
      <div className="filter-content">
        <div className="filter-group">
          <select className="form-select" value={selectedIssue} onChange={handleChange}>
            <option value="">-- Select Issue --</option>
            {issues.map(issue => (
              <option key={issue.id} value={issue.id}>
                {issue.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchIssue;
