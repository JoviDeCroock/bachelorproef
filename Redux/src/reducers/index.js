import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import users from './users';

// Prepare reducers for export
export default combineReducers({
  form: formReducer,
  users,
});
