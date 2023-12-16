import React from "react";
import "./Dialogs.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <section className="dialogs">
      <h3 className="dialogs-title">Dialogs</h3>
      <div className="dialogs-wrapper">
        <ul className="dialogs-interluctors">
          <NavLink to="/Dialogs/1" className="dialogs-interluctors-item">
            <span className="dialogs-interluctors-item__name">Andrew</span>
          </NavLink>
          <NavLink to="/Dialogs/2" className="dialogs-interluctors-item">
            <span className="dialogs-interluctors-item__name">Dmitry</span>
          </NavLink>
          <NavLink to="/Dialogs/3" className="dialogs-interluctors-item">
            <span className="dialogs-interluctors-item__name">Sasha</span>
          </NavLink>
          <NavLink to="/Dialogs/4" className="dialogs-interluctors-item">
            <span className="dialogs-interluctors-item__name">Sveta</span>
          </NavLink>
          <NavLink to="/Dialogs/5" className="dialogs-interluctors-item">
            <span className="dialogs-interluctors-item__name">Valera</span>
          </NavLink>
          <NavLink to="/Dialogs/6" className="dialogs-interluctors-item">
            <span className="dialogs-interluctors-item__name">Viktor</span>
          </NavLink>
        </ul>
        <div className="dialogs-correspondense"></div>
      </div>
    </section>
  );
};

export default Dialogs;
