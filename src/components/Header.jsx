
import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>

      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center">

          <Link to="/" className="logo d-flex align-items-center me-auto">

            <h1 className="sitename"><img src="/img/logo.png" style={{maxHeight: '51px'}}/></h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/" className="active">HOME</Link></li>
              <li><Link to="/founder-editor"> FOUNDER EDITOR</Link></li>
              <li><Link to="/editor-chif">EDITOR IN CHIEF</Link></li>
              <li><Link to="/editor">EDITORS</Link></li>
              <li><Link to="/review-boaed">EDITORIAL & REVIEW BOARD</Link></li>
              <li><Link to="/issue-list"> ISSUES</Link></li>

              <li><Link to="/download"> DOWNLOAD</Link></li>
              <li><Link to="/contact"> CONTACT</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <Link className="btn-getstarted" to="/admin-login">Login</Link>

        </div>
      </header>
    </div>
  )
}

export default Header
