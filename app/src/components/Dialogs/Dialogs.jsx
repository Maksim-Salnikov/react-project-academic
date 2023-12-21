import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <Dialog name={dialog.name} id={dialog.id} avatar={dialog.avatar} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((message) => (
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
