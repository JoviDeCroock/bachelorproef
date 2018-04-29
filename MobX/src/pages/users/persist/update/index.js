import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Form } from 'mobx-formstate';

import userStorePropType from '../../storePropType';
import { updateUser } from '../../../../api/users';
import { TextField } from '../../../../components';
import { LOADING, ERROR } from '../../../../constants/states';

@inject('userStore')
@observer
class UpdateUser extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    }),
    patchValues: PropTypes.func,
    userStore: userStorePropType,
  }

  componentDidMount() {
    const { match: { params: { userId } }, userStore: { fetchUser } } = this.props;
    fetchUser(userId);
  }

  componentDidUpdate(prevProps) {
    const { patchValues, userStore: { selectedUser } } = this.props;
    if (prevProps.selectedUser !== selectedUser) {
      patchValues({ name: selectedUser.name });
    }
  }

  render() {
    const { userStore: { status } } = this.props;

    if (status === LOADING) {
      return <div>Loading</div>;
    } else if (status === ERROR) {
      return <div>An unexpected Error occurred</div>;
    }

    return (
      <Fragment>
        <h1>Update</h1>
        <form>
          <TextField
            fieldId="name"
            label="Name"
            placeholder="Name" />
        </form>
      </Fragment>
    );
  }
}

export default Form({
  handleSubmit: updateUser,
})(UpdateUser);
