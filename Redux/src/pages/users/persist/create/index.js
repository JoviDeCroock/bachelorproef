import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { createUser } from '../../../../api/users';
import { Button, TextField } from '../../../../components';

class CreateUser extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  }

  render() {
    const { onSubmit } = this.props;

    return (
      <Fragment>
        <h1>Create</h1>
        <form onSubmit={onSubmit}>
          <TextField
            fieldId="name"
            label="Name"
            placeholder="Name" />
          <Button type="submit" label="Submit" />
        </form>
      </Fragment>
    );
  }
}

export default CreateUser;
