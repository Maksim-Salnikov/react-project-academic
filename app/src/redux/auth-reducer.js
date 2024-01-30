import { HeaderAPI } from "../api/api";

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

const getProfile = (id) => {
  return (dispatch) => {
    HeaderAPI.getProfile(id).then((data) => {
      dispatch(setAvatar(data.photos.small));
    });
  };
};

export const getAuthMe = () => {
  return (dispatch) => {
    HeaderAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email));
        getProfile(id);
      }
    });
  };
};

export default authReducer;
