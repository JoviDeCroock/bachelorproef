import { action, observable, runInAction } from 'mobx';

import { ERROR, LOADED, LOADING } from '../constants/states';
import { fetchUser, fetchUsers, fetchTotalCount } from '../api/users';

class UserStore {
  @observable users = [];
  @observable selectedUser = {};
  @observable searchString = null;
  @observable limit = 10;
  @observable offset = 0;
  @observable status = LOADING;
  @observable totalCount = 0;

  @action.bound
  async fetchUsers() {
    try {
      this.status = LOADING;
      const { users, totalCount } = await fetchUsers(this.searchString, this.limit, this.offset);
      runInAction(() => {
        this.totalCount = totalCount;
        this.users = users;
        this.status = LOADED;
      });
    } catch (error) {
      runInAction(() => {
        this.status = ERROR;
      });
    }
  }

  @action.bound
  async fetchUser(id) {
    try {
      this.status = LOADING;
      const user = await fetchUser(id);
      runInAction(() => {
        this.selectedUser = user;
        this.status = LOADED;
      });
    } catch (error) {
      runInAction(() => {
        this.status = ERROR;
      });
    }
  }

  @action.bound
  async fetchTotalCount() {
    try {
      const { totalCount } = await fetchTotalCount();
      runInAction(() => {
        this.totalCount = totalCount;
      });
      return totalCount;
    } catch (error) {
      runInAction(() => {
        this.status = ERROR;
      });
      throw error;
    }
  }

  @action.bound
  clearSelection() {
    this.selectedUser = {};
  }

  @action.bound
  clearList() {
    this.users = [];
    this.searchString = null;
    this.limit = 10;
    this.offset = 0;
  }
}

export default new UserStore();
