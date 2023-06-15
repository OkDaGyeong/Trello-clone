import "../styles/navStyle.scss";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = ({ isOpen }) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* 사이드 메뉴*/}

      <div className="sidebar-container">
        <div className="user-box">
          <div id="user-profile">U</div>
          <div id="user-name">user ID</div>
          <button id="menu-toggle" onClick={handleToggle}>
            <img
              src="https://a.trellocdn.com/prgb/assets/58243262833f693f6101.svg"
              alt="버튼"
            />
          </button>
        </div>

        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul className="menu-list">
            <li>
              <Link className="menu-item" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="menu-item" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
