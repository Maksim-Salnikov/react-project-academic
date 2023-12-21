import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavLink to="/Profile" className="navbar__list__item">
          <span className="navbar__list__item__link">Profile</span>
        </NavLink>
        <NavLink to="/Dialogs" className="navbar__list__item">
          <span className="navbar__list__item__link">Messages</span>
        </NavLink>
        <NavLink to="/News" className="navbar__list__item">
          <span className="navbar__list__item__link">News</span>
        </NavLink>
        <NavLink to="/Music" className="navbar__list__item">
          <span className="navbar__list__item__link">Music</span>
        </NavLink>
        <NavLink to="/Settings" className="navbar__list__item">
          <span className="navbar__list__item__link">Settings</span>
        </NavLink>
        <Friends friendsData={props.friendsData} />
      </ul>
    </nav>
  );
};

export default Navbar;
