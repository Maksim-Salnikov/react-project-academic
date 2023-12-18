import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message textMessage={message.textMessage} />
  ));

  return (
    <section className="dialogs">
      <h3 className="dialogs-title">Dialogs</h3>
      <div className="dialogs-wrapper">
        <ul className="dialogs-interluctors">{dialogsElements}</ul>
        <div className="dialogs-correspondense">{messagesElements}</div>
      </div>
    </section>
  );
};

export default Dialogs;
