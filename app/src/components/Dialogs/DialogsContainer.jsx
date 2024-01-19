import React from "react";
import "./Dialogs.css";
import Dialogs from "./Dialogs";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  let dialogsData = props.store.getState().dialogsPage.dialogsData;
  let messagesData = props.store.getState().dialogsPage.messagesData;

  let addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextCreator(text));
  };
  return (
    <Dialogs
      dialogsData={dialogsData}
      messagesData={messagesData}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
    />
  );
};

export default DialogsContainer;
