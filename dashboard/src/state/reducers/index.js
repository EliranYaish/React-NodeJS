import {combineReducers} from 'redux';
import teamsReducer from "./teams";
import resultsReducer from "./results";

const rootReducer = combineReducers({
  teamsReducer,
  resultsReducer,
});


export default rootReducer;