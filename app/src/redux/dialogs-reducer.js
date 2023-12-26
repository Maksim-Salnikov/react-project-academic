const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        textMessage: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }

  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      id: 6,
      textMessage: state.newMessageText,
    };
    state.messagesData.push(newMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newText;
  }
};

export const addMessageCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageTextCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
