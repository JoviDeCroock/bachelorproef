import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { Form } from 'mobx-formstate';

import { createUser } from '../../../../api/users';
import { Button, TextField } from '../../../../components';

@inject('userStore')
@observer
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

export default Form({
  handleSubmit: createUser,
})(CreateUser);
