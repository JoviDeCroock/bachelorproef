import { put, takeEvery } from 'redux-saga/effects';

import { FETCH_USERS } from '../constants/actionTypes';
import { fetchUsers } from '../api/users';
import { fetchUsersSuccessAction, fetchUsersErrorAction } from '../actions/users';

export default function* () {
  yield takeEvery(FETCH_USERS, function* fetchProjects({ limit, offset, searchString }) {
    try {
      const { users, totalCount } = yield fetchUsers(searchString, limit, offset);
      yield put(fetchUsersSuccessAction({
        data: users, limit, offset, searchString, totalCount,
      }));
    } catch (err) {
      yield put(fetchUsersErrorAction({ error: err }));
    }
  });
}
