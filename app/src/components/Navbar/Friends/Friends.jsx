import React from "react";
import "./Friends.css";
import Friend from "./Friend/Friend";

const Friends = (props) => {
  let friendsElements = props.friendsData.map((friend) => (
    <Friend avatar={friend.avatar} name={friend.name} />
  ));

  return (
    <div className="navbar__list__item navbar-list-item-friends">
      <div className="navbar-list-item-friends__title">Friends</div>
      <ul className="navbar-list-item-friends-list">{friendsElements}</ul>
    </div>
  );
};

export default Friends;
