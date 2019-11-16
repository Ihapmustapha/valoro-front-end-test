import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import dashboardReducer from "./dashboardReducer";

const reducer = combineReducers({ loginReducer, dashboardReducer });

export default reducer;
