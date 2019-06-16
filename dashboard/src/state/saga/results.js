import {takeEvery, call, put} from 'redux-saga/effects';
import {LOAD_RESULTS_REQUEST, loadResultsFaild, loadResultsSuccess} from "../actions/results";
import axios from 'axios';

function apiGetResults(id) {
  return axios.get(`http://localhost:3001/results/${id}`).then(result => result.data);
}

function* fetchResults(action) {
  try {
    const resultsData = yield call(apiGetResults,action.payload.id);
    yield put(loadResultsSuccess(resultsData));
  } catch (e) {
  yield put(loadResultsFaild(e));
  }

}

export function* watchResults() {
  yield takeEvery(LOAD_RESULTS_REQUEST, fetchResults)

}