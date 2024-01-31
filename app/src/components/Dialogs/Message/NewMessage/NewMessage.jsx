import React from "react";
import "./NewMessage.css";
import { Field, reduxForm } from "redux-form";

const NewMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="dialogs-correspondense-form">
      <Field
        component="input"
        name="NewMessageText"
        className="dialogs-correspondense-form__input"
      />
      <button className="dialogs-correspondense-form__button">Send</button>
    </form>
  );
};

export const NewMessageReduxForm = reduxForm({
  form: "Message",
})(NewMessage);
