import React from "react";
import "./MyPost.css";
import Post from "../Post/Post";

const MyPost = (props) => {
  let postsElements = props.postsData.map((post) => (
    <Post message={post.message} like={post.like} />
  ));

  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.onPostChange(text);
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
          onClick={props.addPost}
          className="content-mypost-form__button"
        >
          Send
        </button>
      </form>
      {postsElements}
    </div>
  );
};

export default MyPost;
