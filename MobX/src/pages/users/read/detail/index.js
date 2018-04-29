import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';

import userStorePropType from '../../storePropType';
import { LOADING, ERROR } from '../../../../constants/states';

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
    const { match: { params: { userId } }, userStore: { fetchUser } } = this.props;
    // Refetch
    fetchUser(userId);
  }

  render() {
    const { userStore: { status, selectedUser: { id, name } } } = this.props;

    if (status === LOADING) {
      return <div>Loading</div>;
    } else if (status === ERROR) {
      return <div>An unexpected Error occurred</div>;
    }

    return (
      <Fragment>
        <h1>Detail</h1>
        <h2>{id}</h2>
        <p>{name}</p>
      </Fragment>
    );
  }
}

export default UsersDetail;
