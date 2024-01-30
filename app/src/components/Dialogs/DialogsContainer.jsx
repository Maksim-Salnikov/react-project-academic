import React from "react";
import "./Dialogs.css";
import Dialogs from "./Dialogs";
import {
  addMessageCreator,
  updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
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

const DialogsContainer = withAuthRedirect(
  connect(mapStateToProps, mapDispatchToProps)(Dialogs)
);

export default DialogsContainer;
