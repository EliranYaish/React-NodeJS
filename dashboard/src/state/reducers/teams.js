import {LOAD_TEAMS_FAILD, LOAD_TEAMS_REQUEST, LOAD_TEAMS_SUCCESS} from "../actions/teams";

const initialState = {
  isFetching: false,
  error: null,
}

function teamsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TEAMS_REQUEST:
      return Object.assign({},state,{
        isFetching: true,
        data: [],
        error: null,
      });
    case LOAD_TEAMS_FAILD:
      return Object.assign({},state,{
        isFetching: false,
        error: action.payload.error,
      });
    case LOAD_TEAMS_SUCCESS:
      return Object.assign({},state,{
        isFetching: false,
        data: action.payload.teams,
      });


    default:
      return state;

  }
}
export default teamsReducer;
