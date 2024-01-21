const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "Сегодня я много выпил пива", like: "10000" },
    { id: 2, message: "Сегодня качнул бицуху жестко", like: "228" },
    { id: 3, message: "52, лонг лайв, не теряем связь", like: "83" },
  ],
  newPostText: "",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        like: 0,
      };
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.postsData = [...state.postsData];
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostCreator = () => {
  return { type: ADD_POST };
};

export const updateNewPostTextCreator = (text) => {
  return { type: UPDATE_NEW_POST_TEXT, newText: text };
};

export default profileReducer;
