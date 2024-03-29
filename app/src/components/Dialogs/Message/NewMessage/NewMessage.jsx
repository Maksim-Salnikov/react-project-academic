import React from "react";
import "./NewMessage.css";

const NewMessage = (props) => {
  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
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
        onClick={props.addMessage}
        className="dialogs-correspondense-form__button"
      >
        Send
      </button>
    </form>
  );
};

export default NewMessage;
