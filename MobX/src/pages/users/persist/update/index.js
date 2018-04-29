import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import userStorePropType from '../../storePropType';

@inject('userStore')
@observer
class UpdateUser extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    }),
    userStore: userStorePropType,
  }

  async componentDidMount() {
    const { match: { params: { userId } }, userStore: { fetchUser } } = this.props;
    // Refetch
    await fetchUser(userId);
    // Populate form
  }

  render() {
    return (
      <h1>Update</h1>
    );
  }
}

export default UpdateUser;
