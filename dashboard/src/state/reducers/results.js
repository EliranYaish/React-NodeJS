import {LOAD_RESULTS_FAILD, LOAD_RESULTS_REQUEST, LOAD_RESULTS_SUCCESS} from "../actions/results";

const initialState = {
  isFetching: false,
  error: null,
  data:[],
}

function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RESULTS_REQUEST:
      return Object.assign({},state,{
        isFetching: true,
        data: [],
        error: null,
      });
    case LOAD_RESULTS_FAILD:
      return Object.assign({},state,{
        isFetching: false,
        error: action.payload.error,
      });
    case LOAD_RESULTS_SUCCESS:
      return Object.assign({},state,{
        isFetching: false,
        data: action.payload.results,
      });


    default:
      return state;

  }
}
export default resultsReducer;
