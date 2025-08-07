import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Header from './adminlayout/Header';
import Footer from './adminlayout/Footer';
import axios from 'axios';
import "./admin.css"



import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import Sidebar from './adminlayout/Sidebar';


ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend);


const AdminDashboard = () => {


  const [admin, setAdmin] = useState(null);
  const [totalIssues, setTotalIssues] = useState(0);
  const [totalPapers, setTotalPapers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdmin = localStorage.getItem('admin');
    if (!storedAdmin) {
      navigate('/admin-login');
    } else {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, [navigate]);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const issuesRes = await axios.get('http://localhost/backend/api/get_issues_count.php');
        const papersRes = await axios.get('http://localhost/backend/api/get_papers_count.php');
        const usersRes = await axios.get('http://localhost/backend/api/get_user_count.php');
        setTotalIssues(issuesRes.data.total_issues || 0);
        setTotalPapers(papersRes.data.total_papers || 0);
        setTotalUsers(usersRes.data.total_users || 0);
      } catch (error) {
        console.error("Error fetching counts", error);
      }
    };
    fetchCounts();
  }, []);

  // Data for Bar chart
  const data = {
    labels: ['Issues', 'Papers', 'users'],
    datasets: [
      {
        label: 'Count',
        data: [totalIssues, totalPapers, totalUsers],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(78, 173, 14, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true, text: 'Total Issues & Papers , Users Data',

        font: {
          size: 24,
          weight: 'bold'
        },
        color: 'rgba(86, 12, 233, 0.6)',
        padding: {
          top: 10,
          bottom: 30
        }







      },
      responsive: true,
      maintainAspectRatio: false

    },
  };

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/admin-login');
  };

  return (
    <>
      <Sidebar />


      {/* Main content area */}
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 ms-md-auto">
        <Header />

        <main className="px-4 min-vh-100">

          <section className="row">
            <div className="row">
              {/* Papers Card */}
              <div className="col-md-6 col-lg-4 mb-4">
                <article className="dashboard-card bg-primary text-white">
                  <Link to="/view-paper" className="d-flex align-items-center text-decoration-none text-white">
                    <span className="bi bi-file-earmark-text-fill icon h1 me-3"></span>
                    <div>
                      <h5 className="mb-1 text-white">Total Papers</h5>
                      <h3 className="text-white">{totalPapers}</h3>
                    </div>
                  </Link>
                </article>
              </div>

              {/* Issues Card */}
              <div className="col-md-6 col-lg-4 mb-4">
                <article className="dashboard-card bg-info text-white">
                  <Link to="/list-issue" className="d-flex align-items-center text-decoration-none text-white">
                    <span className="bi bi-journals icon h1 me-3"></span>
                    <div>
                      <h5 className="mb-1 text-white">Total Issues</h5>
                      <h3 className="text-white">{totalIssues}</h3>
                    </div>
                  </Link>
                </article>
              </div>

              {/* Users Card */}
              <div className="col-md-6 col-lg-4 mb-4">
                <article className="dashboard-card bg-success text-white">
                  <Link to="/list-user" className="d-flex align-items-center text-decoration-none text-white">
                    <span className="bi bi-people-fill icon h1 me-3"></span>
                    <div>
                      <h5 className="mb-1 text-white">Total Users</h5>
                      <h3 className="text-white">{totalUsers}</h3>
                    </div>
                  </Link>
                </article>
              </div>
            </div>




            <div className="col-sm-6  mx-auto p-3">
              <div className="card p-3" style={{ height: "500px" }}>
                <Bar data={data} options={options} />
              </div>
            </div>




          </section>


        </main>
        <Footer />
      </div>







    </>
  );
};

export default AdminDashboard;
