import { put, select, takeEvery } from 'redux-saga/effects';

import { CREATE_USER, FETCH_USERS, FETCH_USER, UPDATE_USER, FETCH_TOTAL } from '../constants/actionTypes';
import { createUser, fetchUsers, fetchUser, fetchTotalCount, updateUser } from '../api/users';
import { fetchUsersSuccessAction, fetchUsersErrorAction, fetchUserSuccessAction, fetchUserErrorAction, fetchTotalSuccessAction, fetchTotalErrorAction } from '../actions/users';
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

  function* fetchTotalSaga() {
    try {
      const { totalCount } = yield fetchTotalCount();
      yield put(fetchTotalSuccessAction({ totalCount }));
    } catch (error) {
      yield put(fetchTotalErrorAction({ error }));
    }
  }

  yield takeEvery(CREATE_USER, function* createUserSaga({ values: { name } }) {
    try {
      yield fetchTotalSaga();
      const totalCount = yield select(getUsersTotalCount);
      yield createUser({ name }, totalCount);
    } catch (error) {
      throw error;
    }
  });

  yield takeEvery(FETCH_TOTAL, fetchTotalSaga);

  yield takeEvery(UPDATE_USER, function* updateUserSaga({ values: { id, name } }) {
    try {
      yield updateUser({ id, name });
    } catch (error) {
      throw error;
    }
  });
}
