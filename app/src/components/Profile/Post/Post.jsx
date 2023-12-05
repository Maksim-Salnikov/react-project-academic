import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="content-posts-item">
      <img
        src="https://i.gifer.com/origin/5b/5b93fc5b280e1231907822faf9608a43_w200.gif"
        alt="avatar: user"
        className="content-posts-item__image"
      />
      <span className="content-posts-item__text">Hey, why nobody love me?</span>
    </div>
  );
};

export default Post;
