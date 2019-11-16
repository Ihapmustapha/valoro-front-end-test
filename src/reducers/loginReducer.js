import * as actionTypes from "../actions/actionTypes";

const initState = {
  loginIsLoading: false,
  loginToken: "",
  loginError: null
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_TRIGGER:
      return {
        ...state,
        loginIsLoading: true,
        loginToken: "",
        loginError: null
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginIsLoading: false,
        loginToken: action.payload,
        loginError: null
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        loginIsLoading: false,
        loginToken: "",
        loginError: action.error
      };

    default:
      return state;
  }
};

export default loginReducer;
