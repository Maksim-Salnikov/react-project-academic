import React from "react";
import "./Post.css";

const Post = ({ message, like }) => {
  return (
    <div className="content-posts-item">
      <img
        src="https://i.gifer.com/origin/5b/5b93fc5b280e1231907822faf9608a43_w200.gif"
        alt="пользователь"
        className="content-posts-item__image"
      />
      <span className="content-posts-item__text">{message}</span>
      <span className="content-posts-item__likes">Лайк: {like}</span>
    </div>
  );
};

export default Post;
