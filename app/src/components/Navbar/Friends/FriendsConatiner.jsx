import React from "react";
import "./Friends.css";
import Friends from "./Friends";
import { connect } from "react-redux";
import Friend from "./Friend/Friend";

let mapStateToProps = (state) => {
  return {
    friendsElements: state.dialogsPage.dialogsData.map((friend) => (
      <Friend avatar={friend.avatar} name={friend.name} key={friend.id} />
    )),
  };
};

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
