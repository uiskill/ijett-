import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAdmin = localStorage.getItem('admin');
    if (!storedAdmin) {
      navigate('/admin-login');
    } else {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    navigate('/admin-login');
  };
  return (
    <div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {admin && <h4>Welcome, <strong>{admin.username}</strong></h4>}
          {/*<Link className="navbar-brand" to="/">            <h1 className="sitename"><img src="img/logo.png" style={{maxHeight: '51px'}}/></h1></Link>*/}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

          </div> <button onClick={handleLogout} className='btn btn-primary' style={{ marginBottom: '20px' }}>
            Logout
          </button></div>
      </nav> </div>
  )
}

export default Header