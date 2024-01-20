import React from "react";
import "./Friends.css";
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";

const Friends = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let friendsElements = store
          .getState()
          .dialogsPage.dialogsData.map((friend) => (
            <Friend avatar={friend.avatar} name={friend.name} />
          ));

        return (
          <div className="navbar__list__item navbar-list-item-friends">
            <div className="navbar-list-item-friends__title">Friends</div>
            <ul className="navbar-list-item-friends-list">{friendsElements}</ul>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Friends;
