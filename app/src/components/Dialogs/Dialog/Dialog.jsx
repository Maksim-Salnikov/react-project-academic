import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialog.css";

const Dialog = (props) => {
  return (
    <NavLink to={"/Dialogs/" + props.id} className="dialogs-interluctors-item">
      <img
        src={props.avatar}
        alt="avatar"
        className="dialogs-interluctors-item__avatar"
      />
      <span className="dialogs-interluctors-item__name">{props.name}</span>
    </NavLink>
  );
};

export default Dialog;
