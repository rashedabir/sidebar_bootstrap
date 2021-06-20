import React from "react";

function Header({ active, setActive }) {
  return (
    <header
      className={
        active ? "sidebar_active bg-white p-3" : "bg-white p-3 sidebar"
      }
    >
      <button
        id="sidebarCollapse"
        type="button"
        className="btn btn-light bg-light shadow-sm fw-bold"
        onClick={() => {
          setActive(!active);
        }}
      >
        <i className="fas fa-bars"></i>
      </button>
    </header>
  );
}

export default Header;
