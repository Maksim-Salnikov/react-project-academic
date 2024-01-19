import React from "react";
import "./MyPost.css";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let postsData = props.store.getState().profilePage.postsData;

  let addPost = () => {
    props.store.dispatch(addPostCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <MyPost
      addPost={addPost}
      onPostChange={onPostChange}
      postsData={postsData}
    />
  );
};

export default MyPostContainer;
