import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { Button, TextField } from '../../../../components';
import { LOADING, ERROR } from '../../../../constants/states';
import { getSelectedUser, getUserStatus } from '../../../../selectors/users';
import { fetchUserAction, updateUserAction } from '../../../../actions/users';

class UpdateUser extends Component {
  static propTypes = {
    change: PropTypes.func,
    fetchUser: PropTypes.func,
    handleSubmit: PropTypes.func,
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

  componentDidUpdate(prevProps) {
    const { change, selectedUser } = this.props;
    if (prevProps.selectedUser !== selectedUser) {
      Object.keys(selectedUser).forEach(key => change(key, selectedUser[key]));
    }
  }

  render() {
    const { status, handleSubmit } = this.props;
    if (status === LOADING) {
      return <div>Loading</div>;
    } else if (status === ERROR) {
      return <div>An unexpected Error occurred</div>;
    }
    return (
      <Fragment>
        <h1>Update</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            fieldId="name"
            name="name"
            label="Name"
            placeholder="Name" />
          <Button type="submit" label="Submit" />
        </form>
      </Fragment>
    );
  }
}

const formedContainer = reduxForm({
  form: 'updateUser',
})(UpdateUser);

export default connect((state, { match: { params: { userId } } }) => ({
  selectedUser: getSelectedUser(state)[userId] || {},
  status: getUserStatus(state)[userId],
  userId,
}), {
  fetchUser: fetchUserAction,
  onSubmit: updateUserAction,
})(formedContainer);
