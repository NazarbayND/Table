import { combineReducers } from "redux";
import profiles from "./trainingRecords/profiles";
import counter from "./trainingRecords/counter";
import records from "./records/records";

export default combineReducers({
  profiles,
  counter,
  records,
});
