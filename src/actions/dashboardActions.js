import * as actionTypes from "./actionTypes";
import fetchDashboardService from "../services/dashboard";

export const fetchDashboard = () => {
  return dispatch => {
    dispatch({ type: actionTypes.FETCH_DASHBOARD_TRIGGER });
    fetchDashboardService()
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_DASHBOARD_SUCCESS,
          payload: response
        })
      )
      .catch(error =>
        dispatch({ type: actionTypes.FETCH_DASHBOARD_FAIL, error })
      );
  };
};
