import React from "react";
import { NavLink } from "react-router-dom";
import "./Dialog.css";

const Dialog = (props) => {
  return (
    <NavLink to={"/Dialogs/" + props.id} className="dialogs-interluctors-item">
      <span className="dialogs-interluctors-item__name">{props.name}</span>
    </NavLink>
  );
};

export default Dialog;
