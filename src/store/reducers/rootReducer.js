import { combineReducers } from "redux";
import factcheckReducer from "./factcheckReducer";

const rootReducer = combineReducers({
  factcheck: factcheckReducer,
});
export default rootReducer;
