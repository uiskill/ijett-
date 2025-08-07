import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {


  const [sidebarActive, setSidebarActive] = useState(false);
  const [saleCollapse, setSaleCollapse] = useState(false);
  const [purchaseCollapse, setPurchaseCollapse] = useState(false);

  const toggleSidebar = () => setSidebarActive(!sidebarActive);
  const closeSidebar = () => setSidebarActive(false);

  const toggleSaleCollapse = () => setSaleCollapse(!saleCollapse);
  const togglePurchaseCollapse = () => setPurchaseCollapse(!purchaseCollapse);
  return (
    <div>{/* Sidebar Overlay */}
      <div
        id="sidebar-overlay"
        className={`overlay w-100 vh-100 position-fixed ${sidebarActive ? "" : "d-none"
          }`}
        style={{ backgroundColor: "#161c25", zIndex: 1040 }}
        onClick={closeSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`col-md-3 col-lg-2 px-0 position-fixed h-100 bg-white shadow-sm sidebar ${sidebarActive ? "active" : ""
          }`}
        id="sidebar"
        style={{ zIndex: 1050,    backgroundColor: "#161c25" }}
      >
        <h1 className="d-flex my-4 justify-content-center">  <Link className="navbar-brand" to="/admin-dashboard">

          <img src="/img/logo.png" style={{ maxHeight: '51px' }} />
        </Link></h1>
        <div className="list-group rounded-0">
          <Link className="navbar-brand list-group-item list-group-item-action pc-sidebarbg border-0 d-flex align-items-center" to="/admin-dashboard"
          >
            <i className="bi bi-suitcase-lg text-2xl"></i>&nbsp;&nbsp;
            <span className="ml-2">Dashboard</span>
          </Link>
          <button
            className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
            onClick={toggleSaleCollapse}
            aria-expanded={saleCollapse}
          >
            <div>
              <i className="bi bi-universal-access"></i>&nbsp;&nbsp;
              <span className="ml-4 pc-sidebar"><strong>User</strong></span>
            </div>
            <span
              className={`bi bi-chevron-${saleCollapse ? "up" : "down"
                } small`}
            ></span>
          </button>
          {saleCollapse && (
            <div className="list-group">

              <Link className="nav-link list-group-item list-group-item-action border-0 pl-5" to="/list-user" ><strong>User List</strong></Link>

            </div>
          )}


          <button
            className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
            onClick={toggleSaleCollapse}
            aria-expanded={saleCollapse}
          >
            <div>
              <i className="bi bi-clipboard2-data"></i>&nbsp;&nbsp;
              <span className="ml-4 pc-sidebar"><strong>Issue</strong></span>
            </div>
            <span
              className={`bi bi-chevron-${saleCollapse ? "up" : "down"
                } small`}
            ></span>
          </button>
          {saleCollapse && (
            <div className="list-group">

              <Link className="nav-link list-group-item list-group-item-action border-0 pl-5" to="/list-issue" ><strong>List Issues</strong></Link>

              <Link className="nav-link list-group-item list-group-item-action border-0 pl-5" to="/create-issue" ><strong>Create New Issue</strong></Link>


            </div>
          )}

          <button
            className="list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
            onClick={togglePurchaseCollapse}
            aria-expanded={purchaseCollapse}
          >
            <div>
              <i className="bi bi-file-medical"></i>&nbsp;&nbsp;
              <span className="ml-4 pc-sidebar"><strong>Papers</strong></span>
            </div>
            <span
              className={`bi bi-chevron-${purchaseCollapse ? "up" : "down"
                } small`}
            ></span>
          </button>
          {purchaseCollapse && (
            <div className="list-group">

              <Link className="nav-link list-group-item list-group-item-action border-0 pl-5" to="/view-paper"><strong>View Papers</strong></Link>


              <Link className="nav-link list-group-item list-group-item-action border-0 pl-5" to="/submit-paper" ><strong>Submit Papers</strong></Link>

            </div>
          )}
        </div>
      </div></div>
  )
}

export default Sidebar