import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

let dialogsData = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Dmitry" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Valera" },
  { id: 6, name: "Viktor" },
];

let dialogsElements = dialogsData.map((dialog) => (
  <Dialog name={dialog.name} id={dialog.id} />
));

let messagesData = [
  { id: 1, textMessage: "Привет, как дела?" },
  { id: 2, textMessage: "Все путем, у тебя как?" },
  { id: 3, textMessage: "Тоже нормалдос, пойедшь пить пиво?" },
  { id: 4, textMessage: "Да, конечно поеду пить пиво)" },
  { id: 5, textMessage: "Тогда в 52 у меня хд хд хд" },
];

let messagesElements = messagesData.map((message) => (
  <Message textMessage={message.textMessage} />
));

const Dialogs = (props) => {
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
