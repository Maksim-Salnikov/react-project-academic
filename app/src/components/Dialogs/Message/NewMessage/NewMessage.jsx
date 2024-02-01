import React from "react";
import "./NewMessage.css";
import { Field, reduxForm } from "redux-form";
import {
  maxLenghtCreator,
  minLenghtCreator,
  required,
} from "../../../../utils/Validators/Validatos";
import { Input } from "../../../common/FormsControl/FormsControl";

const NewMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="dialogs-correspondense-form">
      <Field
        component={Input}
        name="NewMessageText"
        className="dialogs-correspondense-form__input"
        validate={[required, minLenghtCreator(5), maxLenghtCreator(50)]}
      />
      <button className="dialogs-correspondense-form__button">Send</button>
    </form>
  );
};

export const NewMessageReduxForm = reduxForm({
  form: "Message",
})(NewMessage);
