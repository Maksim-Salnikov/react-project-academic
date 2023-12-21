import React from "react";
import "./Friend.css";

const Friend = (props) => {
  return (
    <li className="navbar-list-item-friends-list-item">
      <img
        src={props.avatar}
        alt="avatar"
        className="navbar-list-item-friends-list-item__img"
      />
      <span className="navbar-list-item-friends-list-item__name">
        {props.name}
      </span>
    </li>
  );
};

export default Friend;
