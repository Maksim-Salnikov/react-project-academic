import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://w7.pngwing.com/pngs/410/852/png-transparent-computer-icons-odnoklassniki-logo-vkontakte-social-network-miscellaneous-text-trademark.png"
        alt="logo: vk"
        className={style.header__logo}
      />
      <div className={style.auth}>
        {props.isAuth ? (
          <span className={style.login}>{props.login}</span>
        ) : (
          <NavLink to="/Login">Login</NavLink>
        )}
        <img
          src={props.avatar != null ? props.avatar : defaultAvatar}
          className={style.avatar}
        />
      </div>
    </header>
  );
};

export default Header;
