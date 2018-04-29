import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import userStorePropType from '../../storePropType';

@inject('userStore')
@observer
class CreateUser extends Component {
  static propTypes = {
    userStore: userStorePropType,
  }

  submit = () => {
    const { userStore } = this.props;
    userStore.createUser();
  }

  render() {
    return (
      <h1>Create</h1>
    );
  }
}

export default CreateUser;
