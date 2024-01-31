import React from "react";
import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { NewMessageReduxForm } from "./Message/NewMessage/NewMessage";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <Dialog
      name={dialog.name}
      id={dialog.id}
      avatar={dialog.avatar}
      key={dialog.id}
    />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message textMessage={message.textMessage} key={message.id} />
  ));

  let onSubmit = (value) => {
    props.addMessage(value.NewMessageText);
  };

  return (
    <section className="dialogs">
      <h3 className="dialogs-title">Dialogs</h3>
      <div className="dialogs-wrapper">
        <ul className="dialogs-interluctors">{dialogsElements}</ul>
        <div className="dialogs-correspondense">
          {messagesElements}
          <NewMessageReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
