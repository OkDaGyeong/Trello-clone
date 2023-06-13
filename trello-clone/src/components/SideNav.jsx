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
        <button id="menu-toggle" onClick={handleToggle}>
          메뉴 열기/닫기
        </button>
        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
