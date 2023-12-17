import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
  return (
    <section className="dialogs">
      <h3 className="dialogs-title">Dialogs</h3>
      <div className="dialogs-wrapper">
        <ul className="dialogs-interluctors">
          <Dialog name="Andrew" id="1" />
          <Dialog name="Dmitry" id="2" />
          <Dialog name="Sasha" id="3" />
          <Dialog name="Sveta" id="4" />
          <Dialog name="Valera" id="5" />
          <Dialog name="Viktor" id="6" />
        </ul>
        <div className="dialogs-correspondense">
          <Message textMessage="Привет, как дела?" />
          <Message textMessage="Привет, все путем" />
          <Message textMessage="Это очень хорошо!" />
        </div>
      </div>
    </section>
  );
};

export default Dialogs;
