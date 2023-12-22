import React from "react";
import "./MyPost.css";

const MyPost = (props) => {
  let newPostElement = React.createRef();

  let newPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
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
        <button
          type="button"
          onClick={newPost}
          className="content-mypost-form__button"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MyPost;
