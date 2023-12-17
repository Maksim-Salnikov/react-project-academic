import React from "react";
import "./Message.css";

const Message = (props) => {
  return (
    <div className="dialogs-correspondense-message">{props.textMessage}</div>
  );
};

export default Message;
