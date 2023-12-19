import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    <div className="dialogs-correspondense-message">
      <img
        className="dialogs-correspondense-message__avatar"
        src="https://i.gifer.com/origin/5b/5b93fc5b280e1231907822faf9608a43_w200.gif"
      />
      <span className="dialogs-correspondense-message__text">
        {props.textMessage}
      </span>
    </div>
  );
};

export default Message;
