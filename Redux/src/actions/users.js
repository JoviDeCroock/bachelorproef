import { CREATE_USER, FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_ERROR, FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, UPDATE_USER, FETCH_TOTAL, FETCH_TOTAL_SUCCESS, FETCH_TOTAL_ERROR } from '../constants/actionTypes';

// USERS
// /////
export const fetchUsersAction = ({ limit, offset, searchString }) => ({
  limit,
  offset,
  searchString,
  type: FETCH_USERS,
});

export const fetchUsersSuccessAction = ({
  data, limit, offset, searchString, totalCount,
}) => ({
  data,
  limit,
  offset,
  searchString,
  totalCount,
  type: FETCH_USERS_SUCCESS,
});

export const fetchUsersErrorAction = ({ error, limit, offset }) => ({
  error,
  limit,
  offset,
  type: FETCH_USERS_ERROR,
});

// USER
// ////

export const fetchUserAction = ({ userId }) => ({
  type: FETCH_USER,
  userId,
});

export const fetchUserSuccessAction = ({ user }) => ({
  type: FETCH_USER_SUCCESS,
  user,
});

export const fetchUserErrorAction = ({ userId, error }) => ({
  error,
  type: FETCH_USER_ERROR,
  userId,
});

// TOTALCOUNT
// /////////

export const fetchTotalAction = () => ({
  type: FETCH_TOTAL,
});

export const fetchTotalSuccessAction = ({ totalCount }) => ({
  totalCount,
  type: FETCH_TOTAL_SUCCESS,
});

export const fetchTotalErrorAction = ({ error }) => ({
  error,
  type: FETCH_TOTAL_ERROR,
});

// CREATE
// //////

export const createUserAction = values => ({
  type: CREATE_USER,
  values,
});

// UPDATE
// //////

export const updateUserAction = values => ({
  type: UPDATE_USER,
  values,
});
