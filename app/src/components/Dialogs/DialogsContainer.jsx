import React from "react";
import "./Dialogs.css";
import Dialogs from "./Dialogs";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
