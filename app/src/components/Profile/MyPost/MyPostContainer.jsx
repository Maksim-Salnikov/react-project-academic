import React from "react";
import "./MyPost.css";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostCreator());
    },
    onPostChange: (text) => {
      dispatch(updateNewPostTextCreator(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
