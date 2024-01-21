import React from "react";
import styles from "./MyPost.module.css";
import Post from "../Post/Post";

const MyPost = ({
  addPost,
  newPostText,
  onPostChange: onPostChangeProp,
  postsData,
}) => {
  let newPostElement = React.createRef();

  let onPostChange = () => {
    let text = newPostElement.current.value;
    onPostChangeProp(text);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Мои посты</h3>
      <form action="text" className={styles.form}>
        <textarea
          onChange={onPostChange}
          value={newPostText}
          ref={newPostElement}
          className={styles.textarea}
          placeholder="твои новости..."
        />
        <button type="button" onClick={addPost} className={styles.button}>
          Send
        </button>
      </form>
      {postsData.map((post) => (
        <Post message={post.message} like={post.like} key={post.id} />
      ))}
    </div>
  );
};

export default MyPost;
