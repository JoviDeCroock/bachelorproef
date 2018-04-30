import { put, takeEvery } from 'redux-saga/effects';

import { FETCH_USERS, FETCH_USER } from '../constants/actionTypes';
import { fetchUsers, fetchUser } from '../api/users';
import { fetchUsersSuccessAction, fetchUsersErrorAction, fetchUserSuccessAction, fetchUserErrorAction } from '../actions/users';

export default function* () {
  yield takeEvery(FETCH_USERS, function* fetchUsersSaga({ limit, offset, searchString }) {
    try {
      const { users, totalCount } = yield fetchUsers(searchString, limit, offset);
      yield put(fetchUsersSuccessAction({
        data: users, limit, offset, searchString, totalCount,
      }));
    } catch (error) {
      yield put(fetchUsersErrorAction({ error }));
    }
  });

  yield takeEvery(FETCH_USER, function* fetchUserSaga({ userId }) {
    try {
      const user = yield fetchUser(userId);
      yield put(fetchUserSuccessAction({ user }));
    } catch (error) {
      yield put(fetchUserErrorAction({ error, userId }));
    }
  });
}
