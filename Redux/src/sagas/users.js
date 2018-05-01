import { put, select, takeEvery } from 'redux-saga/effects';

import { CREATE_USER, FETCH_USERS, FETCH_USER } from '../constants/actionTypes';
import { createUser, fetchUsers, fetchUser } from '../api/users';
import { fetchUsersSuccessAction, fetchUsersErrorAction, fetchUserSuccessAction, fetchUserErrorAction } from '../actions/users';
import { getUsersTotalCount } from '../selectors/users';

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

  yield takeEvery(CREATE_USER, function* createUserSaga({ name }) {
    try {
      const totalCount = yield select(getUsersTotalCount);
      if (!totalCount) {
        // Catch
      }
      yield createUser({ name }, totalCount);
    } catch (error) {
      throw error;
    }
  });
}
