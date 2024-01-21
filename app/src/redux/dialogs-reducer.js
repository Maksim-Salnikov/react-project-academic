const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Andrew",
      avatar:
        "https://sun9-61.userapi.com/c206524/v206524740/2d433/FKffvmwVZeA.jpg",
    },
    {
      id: 2,
      name: "Dmitry",
      avatar:
        "https://sun9-19.userapi.com/impg/Z0lGOuMi5OSo70IGbXCQcWwU22LG39_NGrSbIg/YJTuDQ-NFFw.jpg?size=604x453&quality=95&sign=ce6ee4431e79310864ac79baaac2fa2a&c_uniq_tag=cEBITtl7H_dhxdjIxpHdgOP-zn3fcjE7kLcnGal_ypE&type=album",
    },
    {
      id: 3,
      name: "Sasha",
      avatar: "https://99px.ru/sstorage/41/2011/01/12501111454544969.jpg",
    },
    {
      id: 4,
      name: "Sveta",
      avatar:
        "https://avatars.dzeninfra.ru/get-zen_doc/3855260/pub_5f59f098d7ccef142bc5bd7d_5f59f22e55f5fd69c0f9cfe3/scale_1200",
    },
    {
      id: 5,
      name: "Valera",
      avatar:
        "https://sun9-4.userapi.com/impg/I9cfcHEWYTld7xk_I1boAB3ezXmryAUd8CS5xg/WY1yh_8V9Ng.jpg?size=363x604&quality=96&sign=2e4a36a828892ada34ae7455d794c9a9&type=album",
    },
    {
      id: 6,
      name: "Viktor",
      avatar:
        "https://sun9-67.userapi.com/impg/c858416/v858416035/214903/Y4ldK9MEhyI.jpg?size=435x604&quality=96&sign=304fcf267cb3596a9769184628c5f001&type=album",
    },
  ],
  messagesData: [
    { id: 1, textMessage: "Привет, как дела?" },
    { id: 2, textMessage: "Все путем, у тебя как?" },
    { id: 3, textMessage: "Тоже нормалдос, пойедшь пить пиво?" },
    { id: 4, textMessage: "Да, конечно поеду пить пиво)" },
    { id: 5, textMessage: "Тогда в 52 у меня хд хд хд" },
  ],
  newMessageText: "",
};

let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 6,
        textMessage: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessageCreator = () => {
  return { type: ADD_MESSAGE };
};

export const updateNewMessageTextCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text };
};

export default dialogsReducer;
