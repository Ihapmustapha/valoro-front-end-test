import * as actionTypes from "./actionTypes";
import loginService from "../services/login";

// for testing
// email: eve.holt@reqres.in
// password: cityslicka
export const login = (email, password) => {
  return dispatch => {
    dispatch({ type: actionTypes.LOGIN_TRIGGER });
    loginService(email, password)
      .then(({ data: { token } }) => {
        console.log(token);
        dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: token });
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: actionTypes.LOGIN_FAIL, error });
      });
  };
};
