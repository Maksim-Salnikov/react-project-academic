import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import FriendsContainer from "./Friends/FriendsConatiner";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavLink to="/Profile" className="navbar__list__item">
          <span className="navbar__list__item__link">Профиль</span>
        </NavLink>
        <NavLink to="/Dialogs" className="navbar__list__item">
          <span className="navbar__list__item__link">Сообщения</span>
        </NavLink>
        <NavLink to="/News" className="navbar__list__item">
          <span className="navbar__list__item__link">Новости</span>
        </NavLink>
        <NavLink to="/Music" className="navbar__list__item">
          <span className="navbar__list__item__link">Музыка</span>
        </NavLink>
        <NavLink to="/Settings" className="navbar__list__item">
          <span className="navbar__list__item__link">Настройки</span>
        </NavLink>
        <NavLink to="/Users" className="navbar__list__item">
          <span className="navbar__list__item__link">Пользователи</span>
        </NavLink>
        <FriendsContainer />
      </ul>
    </nav>
  );
};

export default Navbar;
