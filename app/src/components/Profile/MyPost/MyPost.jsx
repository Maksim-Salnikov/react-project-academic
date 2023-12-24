import React from "react";
import "./MyPost.css";

const MyPost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
  };

  return (
    <div className="content-mypost">
      <h3 className="content-mypost__title">My posts</h3>
      <form action="text" className="content-mypost-form">
        <textarea
          onChange={onPostChange}
          value={props.newPostText}
          ref={newPostElement}
          className="content-mypost-form__input"
          placeholder="your news..."
        />
        <button
          type="button"
          onClick={addPost}
          className="content-mypost-form__button"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MyPost;
