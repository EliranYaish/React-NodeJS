export const LOAD_RESULTS_REQUEST = "result/LOAD_RESULTS_REQUEST";
export const LOAD_RESULTS_FAILD = "result/LOAD_RESULTS_FAILD";
export const LOAD_RESULTS_SUCCESS = "result/LOAD_RESULTS_SUCCESS";

export function loadResultsRequest(id) {
  return {
    type: LOAD_RESULTS_REQUEST,
    payload: {
      id
    }
  }
}

export function loadResultsFaild(error) {
  return {
    type: LOAD_RESULTS_FAILD,
    payload: {
      error,
    }
  }
}

export function loadResultsSuccess(results) {
  return {
    type: LOAD_RESULTS_SUCCESS,
    payload: {
      results,
    }
  }
}

