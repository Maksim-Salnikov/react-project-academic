import React from "react";
import "./MyPost.css";

const MyPost = () => {
  return (
    <div className="content-mypost">
      <h3 className="content-mypost__title">My posts</h3>
      <form action="text" className="content-mypost-form">
        <input
          type="text"
          className="content-mypost-form__input"
          placeholder="your news..."
        />
        <button className="content-mypost-form__button">Send</button>
      </form>
    </div>
  );
};

export default MyPost;
