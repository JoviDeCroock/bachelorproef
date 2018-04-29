import { put, takeEvery, select } from 'redux-saga/effects';

import { FETCH_USERS } from '../constants/actionTypes';

export default function* () {
  yield takeEvery(FETCH_USERS, function* fetchProjects() {
    yield console.log('x');
  });
}
