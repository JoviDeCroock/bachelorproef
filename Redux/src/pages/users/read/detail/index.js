import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUserAction } from '../../../../actions/users';
import { getSelectedUser, getUserStatus } from '../../../../selectors/users';
import { LOADING, ERROR } from '../../../../constants/states';

class UsersDetail extends Component {
  static propTypes = {
    fetchUser: PropTypes.func,
    selectedUser: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    status: PropTypes.symbol,
    userId: PropTypes.string,
  }

  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser({ userId });
  }

  render() {
    const { status, selectedUser: { id, name } } = this.props;
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

export default connect((state, { match: { params: { userId } } }) => ({
  selectedUser: getSelectedUser(state)[userId] || {},
  status: getUserStatus(state)[userId],
  userId,
}), {
  fetchUser: fetchUserAction,
})(UsersDetail);
