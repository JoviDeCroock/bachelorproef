import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { updateUser } from '../../../../api/users';
import { Button, TextField } from '../../../../components';
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
  }

  componentDidMount() {
    const { match: { params: { userId } } } = this.props;
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div />
    );
  }
}

export default UpdateUser;
