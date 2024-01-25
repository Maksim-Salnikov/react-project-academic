const SET_USER_DATA = "SET_USER_DATA";
const SET_AVATAR = "SET_AVATAR";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  avatar: null,
};

let authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    }
    case SET_AVATAR: {
      return {
        ...state,
        avatar: action.avatar,
      };
    }
    default:
      return state;
  }
};

export const setAuthUserData = (userId, login, email) => {
  return { type: SET_USER_DATA, data: { userId, login, email } };
};

export const setAvatar = (avatar) => {
  return { type: SET_AVATAR, avatar };
};
export default authReducer;
