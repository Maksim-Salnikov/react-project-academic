import React from "react";
import "./NewMessage.css";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../../../redux/dialogs-reducer";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextCreator(text));
  };

  return (
    <form action="text" className="dialogs-correspondense-form">
      <input
        onChange={onMessageChange}
        value={props.newMessageText}
        ref={newMessageElement}
        type="text"
        className="dialogs-correspondense-form__input"
      />
      <button
        type="button"
        onClick={addMessage}
        className="dialogs-correspondense-form__button"
      >
        Send
      </button>
    </form>
  );
};

export default NewMessage;
