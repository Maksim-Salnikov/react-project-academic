import React from "react";
import "./Friends.css";

const Friends = (props) => {
  return (
    <div className="navbar__list__item navbar-list-item-friends">
      <div className="navbar-list-item-friends__title">Friends</div>
      <ul className="navbar-list-item-friends-list">{props.friendsElements}</ul>
    </div>
  );
};

export default Friends;
