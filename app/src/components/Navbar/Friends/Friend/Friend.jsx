import React from "react";
import "./Friend.css";

const Friend = ({ name, avatar }) => {
  return (
    <li className="navbar-list-item-friends-list-item">
      <img
        src={avatar}
        alt="аватарка"
        className="navbar-list-item-friends-list-item__img"
      />
      <span className="navbar-list-item-friends-list-item__name">{name}</span>
    </li>
  );
};

export default Friend;
