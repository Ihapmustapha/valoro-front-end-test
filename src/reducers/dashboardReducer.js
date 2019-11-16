import * as actionTypes from "../actions/actionTypes";

const initState = {};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DASHBOARD_TRIGGER:
      return { ...state };
    case actionTypes.FETCH_DASHBOARD_SUCCESS:
      return { ...state };
    case actionTypes.FETCH_DASHBOARD_FAIL:
      return { ...state };

    default:
      return state;
  }
};

export default dashboardReducer;
