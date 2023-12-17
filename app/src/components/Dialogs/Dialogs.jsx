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

let meassagesData = [
  { id: 1, textMessage: "Привет, как дела?" },
  { id: 2, textMessage: "Все путем, у тебя как?" },
  { id: 3, textMessage: "Тоже нормалдос, пойедшь пить пиво?" },
  { id: 4, textMessage: "Да, конечно поеду пить пиво)" },
  { id: 5, textMessage: "Тогда в 52 у меня хд хд хд" },
];

const Dialogs = (props) => {
  return (
    <section className="dialogs">
      <h3 className="dialogs-title">Dialogs</h3>
      <div className="dialogs-wrapper">
        <ul className="dialogs-interluctors">
          <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
          <Dialog name={dialogsData[1].name} id={dialogsData[1].id} />
          <Dialog name={dialogsData[2].name} id={dialogsData[2].id} />
          <Dialog name={dialogsData[3].name} id={dialogsData[3].id} />
          <Dialog name={dialogsData[4].name} id={dialogsData[4].id} />
          <Dialog name={dialogsData[5].name} id={dialogsData[5].id} />
        </ul>
        <div className="dialogs-correspondense">
          <Message textMessage={meassagesData[0].textMessage} />
          <Message textMessage={meassagesData[1].textMessage} />
          <Message textMessage={meassagesData[2].textMessage} />
          <Message textMessage={meassagesData[3].textMessage} />
          <Message textMessage={meassagesData[4].textMessage} />
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
