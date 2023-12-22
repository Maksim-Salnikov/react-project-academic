import React from "react";
import "./NewMessage.css";

const NewMessage = () => {
  let newMessageElement = React.createRef();

  let sendMessage = () => {
    let text = newMessageElement.current.velue;
    alert(text);
  };

  return (
    <form action="text" className="dialogs-correspondense-form">
      <input
        ref={newMessageElement}
        type="text"
        className="dialogs-correspondense-form__input"
      />
      <button
        type="button"
        onClick={sendMessage}
        className="dialogs-correspondense-form__button"
      >
        Send
      </button>
    </form>
  );
};

export default NewMessage;
