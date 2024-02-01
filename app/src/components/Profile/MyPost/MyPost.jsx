import React from "react";
import styles from "./MyPost.module.css";
import Post from "../Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  minLenghtCreator,
  maxLenghtCreator,
  required,
} from "../../../utils/Validators/Validatos";
import { Textarea } from "../../common/FormsControl/FormsControl";

const NewMyPost = (props) => {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="NewPostText"
        className={styles.textarea}
        placeholder="твои новости..."
        validate={[required, maxLenghtCreator(10), minLenghtCreator(2)]}
      />
      <button className={styles.button}>Отправить</button>
    </form>
  );
};

const NewMyPostReduxForm = reduxForm({
  form: "Post",
})(NewMyPost);

const MyPost = ({ addPost, postsData }) => {
  let onSubmit = (value) => {
    console.log(value);
    addPost(value.NewPostText);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Мои посты</h3>
      <NewMyPostReduxForm onSubmit={onSubmit} />
      {postsData.map((post) => (
        <Post message={post.message} like={post.like} key={post.id} />
      ))}
    </div>
  );
};

export default MyPost;
