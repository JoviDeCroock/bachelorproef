import { action, observable, runInAction } from 'mobx';

import { ERROR, LOADED, LOADING } from '../constants/states';
import { fetchUsers } from '../api/users';

class UserStore {
  @observable users = [];
  @observable usersHash = observable.map();
  @observable searchString = null;
  @observable limit = 10;
  @observable offset = 0;
  @observable status = LOADING;

  @action.bound
  async fetchUsers() {
    try {
      this.status = LOADING;
      const users = await fetchUsers(this.searchString, this.limit, this.offset);
      runInAction(() => {
        this.users = users;
        this.status = LOADED;
      });
    } catch (error) {
      this.status = ERROR;
      throw error;
    }
  }
}

export default new UserStore();
