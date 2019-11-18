import * as actionTypes from "../actions/actionTypes";

const initState = {
  dashboardIsLoading: false,
  dashboardData: null,
  dashboardError: null
};

const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DASHBOARD_TRIGGER:
      return {
        ...state,
        dashboardIsLoading: true,
        dashboardData: null,
        dashboardError: null
      };
    case actionTypes.FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardIsLoading: false,
        dashboardData: action.payload,
        dashboardError: null
      };
    case actionTypes.FETCH_DASHBOARD_FAIL:
      return {
        ...state,
        dashboardIsLoading: false,
        dashboardData: null,
        dashboardError: action.error
      };

    default:
      return state;
  }
};

export default dashboardReducer;
