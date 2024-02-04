import { getAuthMe } from "./auth-reducer";

const INITIALIZED_SECCESS = "INITIALIZED_SECCESS";

let initialState = {
  initialized: false,
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SECCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSeccess = () => {
  return { type: INITIALIZED_SECCESS };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getAuthMe());
    promise.then(() => {
      dispatch(initializedSeccess());
    });
  };
};

export default appReducer;
