import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import userStorePropType from '../../storePropType';

@inject('userStore')
@observer
class UsersDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    }),
    userStore: userStorePropType,
  }
  componentDidMount() {
    const { match: { params: { userId } }, userStore } = this.props;
    // Refetch
    userStore.fetchUser(userId);
  }

  render() {
    return (
      <h1>Detail</h1>
    );
  }
}

export default UsersDetail;
