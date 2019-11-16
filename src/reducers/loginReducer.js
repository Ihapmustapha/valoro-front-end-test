import * as actionTypes from "../actions/actionTypes";

const initState = {};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_TRIGGER:
      return { ...state };
    case actionTypes.LOGIN_SUCCESS:
      return { ...state };
    case actionTypes.LOGIN_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default loginReducer;
