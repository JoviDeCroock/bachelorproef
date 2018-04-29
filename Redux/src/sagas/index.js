import { spawn } from 'redux-saga/effects';

import userSagas from './users';

export default function* () {
  yield spawn(userSagas);
}
