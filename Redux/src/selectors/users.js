import { createSelector } from 'reselect';

const getUsersState = state => state.users;

export const getUsersData = createSelector(
  getUsersState,
  state => state.data,
);

export const getUsersOffset = createSelector(
  getUsersState,
  state => state.from,
);

export const getUsersLimit = createSelector(
  getUsersState,
  state => state.limit,
);

export const getUsersError = createSelector(
  getUsersState,
  state => state.error,
);

export const getUsersStatus = createSelector(
  getUsersState,
  state => state.listStatus,
);

export const getUsersSearchString = createSelector(
  getUsersState,
  state => state.searchString,
);

export const getUsersTotalCount = createSelector(
  getUsersState,
  state => state.totalCount,
);

export const getSelectedUser = createSelector(
  getUsersState,
  state => state.selectedUser,
);

export const getUserStatus = createSelector(
  getUsersState,
  state => state.userStatus,
);
