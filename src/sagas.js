import { delay } from 'redux-saga';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { CHANGE_INPUT, loadResult } from './actions';
import { searchApi } from './api';

function* changeInput() {
  yield delay(400);
  const word = yield select(state => { return state.word; });
  const json = yield call(searchApi, word);
  yield put(loadResult(json));
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeLatest(CHANGE_INPUT, changeInput);
}
