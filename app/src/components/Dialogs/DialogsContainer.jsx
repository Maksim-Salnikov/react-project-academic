import React from "react";
import "./Dialogs.css";
import Dialogs from "./Dialogs";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let dialogsData = store.getState().dialogsPage.dialogsData;
        let messagesData = store.getState().dialogsPage.messagesData;

        let addMessage = () => {
          store.dispatch(addMessageCreator());
        };

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextCreator(text));
        };
        return (
          <Dialogs
            dialogsData={dialogsData}
            messagesData={messagesData}
            addMessage={addMessage}
            onMessageChange={onMessageChange}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
