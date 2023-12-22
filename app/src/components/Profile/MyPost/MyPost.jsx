import React from "react";
import "./MyPost.css";

const MyPost = () => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className="content-mypost">
      <h3 className="content-mypost__title">My posts</h3>
      <form action="text" className="content-mypost-form">
        <input
          ref={newPostElement}
          type="text"
          className="content-mypost-form__input"
          placeholder="your news..."
        />
        <button onClick={addPost} className="content-mypost-form__button">
          Send
        </button>
      </form>
    </div>
  );
};

export default MyPost;
