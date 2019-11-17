import * as actionTypes from "./actionTypes";
import loginService from "../services/login";
import history from "../history";

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
        history.push("/dashboard");
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: actionTypes.LOGIN_FAIL, error });
      });
  };
};
