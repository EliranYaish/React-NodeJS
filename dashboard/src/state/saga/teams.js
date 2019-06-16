import {takeEvery, call, put} from 'redux-saga/effects';
import {LOAD_TEAMS_REQUEST, loadTeamsFaild, loadTeamsSuccess} from "../actions/teams";
import axios from 'axios';

function apiGetTeams() {
  return axios.get('http://localhost:3001/teams').then(result => result.data);
}

function* fetchTeams(action) {
  try {
    const teamsData = yield call(apiGetTeams);
    yield put(loadTeamsSuccess(teamsData));
  } catch (e) {
  yield put(loadTeamsFaild(e));
  }

}

export function* watchTeams() {
  yield takeEvery(LOAD_TEAMS_REQUEST, fetchTeams)

}