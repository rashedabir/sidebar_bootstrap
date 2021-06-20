import React from "react";

function Sidebar({ active }) {
  return (
    <div
      className={
        active
          ? "sidebar_active vertical-nav bg-white"
          : "vertical-nav bg-white sidebar"
      }
    >
      <div className="py-4 px-3 mb-4 bg-light">
        <div className="media d-flex align-items-center">
          <img
            width="80"
            height="80"
            className="me-3 rounded-circle img-thumbnail shadow-sm"
            src="https://rashed-abir.web.app/static/media/rashed%20abir.bad348d4.JPEG"
            alt="logo"
          />
          <div className="media-body">
            <h4 className="m-0">rashed</h4>
            <p className="font-weight-normal text-muted mb-0">web developer</p>
          </div>
        </div>
      </div>
      <p className="text-grey fw-bold text-uppercase px-3 small py-4 mb-0">
        dashboard
      </p>
      <ul className="nav flex-column bg-white mb-0">
        <li className="nav-item">
          <a href="!#" className="nav-link text-dark bg-light">
            home
          </a>
        </li>
        <li className="nav-item">
          <a href="!#" className="nav-link text-dark">
            about
          </a>
        </li>
        <li className="nav-item">
          <a href="!#" className="nav-link text-dark">
            services
          </a>
        </li>
        <li className="nav-item">
          <a href="!#" className="nav-link text-dark">
            portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
