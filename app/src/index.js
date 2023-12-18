import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let postsData = [
  { id: 1, message: "Сегодня я много выпил пива", like: "10000" },
  { id: 2, message: "Сегодня качнул бицуху жестко", like: "228" },
  { id: 3, message: "52, лонг лайв, не теряем связь", like: "83" },
];

let dialogsData = [
  { id: 1, name: "Andrew" },
  { id: 2, name: "Dmitry" },
  { id: 3, name: "Sasha" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Valera" },
  { id: 6, name: "Viktor" },
];

let messagesData = [
  { id: 1, textMessage: "Привет, как дела?" },
  { id: 2, textMessage: "Все путем, у тебя как?" },
  { id: 3, textMessage: "Тоже нормалдос, пойедшь пить пиво?" },
  { id: 4, textMessage: "Да, конечно поеду пить пиво)" },
  { id: 5, textMessage: "Тогда в 52 у меня хд хд хд" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
