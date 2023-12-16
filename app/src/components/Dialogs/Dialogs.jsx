import React from "react";
import "./Dialogs.css";

const Dialogs = (props) => {
  return (
    <section class="dialogs">
      <h3 class="dialogs-title">Dialogs</h3>
      <div class="dialogs-wrapper">
        <ul class="dialogs-interluctors">
          <li class="dialogs-interluctors-item">
            <span class="dialogs-interluctors-item__name">Andrew</span>
          </li>
          <li class="dialogs-interluctors-item">
            <span class="dialogs-interluctors-item__name">Dmitry</span>
          </li>
          <li class="dialogs-interluctors-item">
            <span class="dialogs-interluctors-item__name">Sasha</span>
          </li>
          <li class="dialogs-interluctors-item">
            <span class="dialogs-interluctors-item__name">Sveta</span>
          </li>
          <li class="dialogs-interluctors-item">
            <span class="dialogs-interluctors-item__name">Valera</span>
          </li>
          <li class="dialogs-interluctors-item">
            <span class="dialogs-interluctors-item__name">Viktor</span>
          </li>
        </ul>
        <div class="dialogs-correspondense"></div>
      </div>
    </section>
  );
};

export default Dialogs;
