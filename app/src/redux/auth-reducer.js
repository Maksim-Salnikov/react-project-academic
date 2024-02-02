import { AuthAPI } from "../api/api";

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

export const setAuthUserData = (userId, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { userId, login, email, isAuth } };
};

export const setAvatar = (avatar) => {
  return { type: SET_AVATAR, avatar };
};

const getProfile = (id) => {
  return (dispatch) => {
    AuthAPI.getProfile(id).then((data) => {
      dispatch(setAvatar(data.photos.small));
    });
  };
};

export const getAuthMe = () => {
  return (dispatch) => {
    AuthAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, login, email, true));
        getProfile(id);
      }
    });
  };
};

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    AuthAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
        debugger;
        dispatch(getAuthMe());
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    AuthAPI.logout().then((data) => {
      if (data.resultCode === 0) {
        debugger;
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};

export default authReducer;
