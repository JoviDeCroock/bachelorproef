import { FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../constants/actionTypes';

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
