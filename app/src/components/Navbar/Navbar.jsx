import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <a href="/Profile" className="navbar-list-item__link">
            Profile
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="/Dialogs" className="navbar-list-item__link">
            Messages
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="News" className="navbar-list-item__link">
            News
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="/Music" className="navbar-list-item__link">
            Music
          </a>
        </li>
        <li className="navbar-list-item">
          <a href="/Settings" className="navbar-list-item__link">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
