import React from "react";
import "./MyPost.css";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let postsData = store.getState().profilePage.postsData;

        let addPost = () => {
          store.dispatch(addPostCreator());
        };

        let onPostChange = (text) => {
          store.dispatch(updateNewPostTextCreator(text));
        };
        return (
          <MyPost
            addPost={addPost}
            onPostChange={onPostChange}
            postsData={postsData}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
