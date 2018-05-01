import { flow, types } from 'mobx-state-tree';

import User from './models/user';
import { ERROR, LOADING, LOADED } from '../constants/states';
import { fetchUser, fetchUsers } from '../api/users';

const UserStore = types
  .model({
    error: types.optional(types.string, ''),
    limit: types.optional(types.number, 10),
    offset: types.optional(types.number, 0),
    searchString: types.optional(types.string, ''),
    selectedUser: types.optional(User, { id: -1, name: 'x' }),
    status: types.optional(types.string, LOADING),
    totalCount: types.optional(types.number, 0),
    users: types.optional(types.array(User), []),
  })
  .actions(self => ({
    fetchUser: flow(function* fetchUserAction(selection) {
      self.selectedUser = { id: -1, name: 'x' };
      self.status = LOADING;
      try {
        const user = yield fetchUser(selection);
        self.selectedUser = user;
        self.status = LOADED;
      } catch (e) {
        self.error = 'unexpected error';
        self.status = ERROR;
      }
    }),
    fetchUsers: flow(function* fetchUsersAction() {
      self.users = [];
      self.status = LOADING;
      try {
        const { users, totalCount } = yield fetchUsers(self.searchString, self.limit, self.offset);
        self.users = users;
        self.status = LOADED;
        self.totalCount = Number(totalCount);
      } catch (e) {
        self.error = 'unexpected error';
        self.status = ERROR;
      }
    }),
  }));

export default UserStore.create();
