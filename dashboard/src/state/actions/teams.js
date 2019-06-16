export const LOAD_TEAMS_REQUEST = "Teams/LOAD_TEAMS_REQUEST";
export const LOAD_TEAMS_FAILD = "Teams/LOAD_TEAMS_FAILD";
export const LOAD_TEAMS_SUCCESS = "Teams/LOAD_TEAMS_SUCCESS";

export function loadTeamsRequest() {
  return {
    type: LOAD_TEAMS_REQUEST,
    payload: {}
  }
}

export function loadTeamsFaild(error) {
  return {
    type: LOAD_TEAMS_FAILD,
    payload: {
      error,
    }
  }
}

export function loadTeamsSuccess(teams) {
  return {
    type: LOAD_TEAMS_SUCCESS,
    payload: {
      teams,
    }
  }
}

