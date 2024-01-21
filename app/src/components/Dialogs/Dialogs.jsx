import React from "react";
import "./Dialogs.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./Message/NewMessage/NewMessage";

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

  return (
    <section className="dialogs">
      <h3 className="dialogs-title">Dialogs</h3>
      <div className="dialogs-wrapper">
        <ul className="dialogs-interluctors">{dialogsElements}</ul>
        <div className="dialogs-correspondense">
          {messagesElements}
          <NewMessage
            addMessage={props.addMessage}
            onMessageChange={props.onMessageChange}
            newMessageText={props.newMessageText}
          />
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
