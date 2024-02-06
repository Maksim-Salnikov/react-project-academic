import { ProfileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  postsData: [
    { id: 1, message: "Сегодня я много выпил пива", like: "10000" },
    { id: 2, message: "Сегодня качнул бицуху жестко", like: "228" },
    { id: 3, message: "52, лонг лайв, не теряем связь", like: "83" },
  ],
  profile: null,
  status: "",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          { id: 5, message: action.NewPostText, like: 0 },
        ],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((p) => p.id !== action.postId),
      };
    }
    default:
      return state;
  }
};

export const addPostCreator = (NewPostText) => {
  return { type: ADD_POST, NewPostText };
};
export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const deletePost = (postId) => {
  return { type: DELETE_POST, postId };
};

export const setProfile = (userId) => async (dispatch) => {
  let data = await ProfileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};
export const getStatus = (userId) => async (dispatch) => {
  let data = await ProfileAPI.getStatus(userId);
  dispatch(setStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
  let data = await ProfileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
