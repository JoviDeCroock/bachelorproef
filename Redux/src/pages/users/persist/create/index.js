import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { Button, TextField } from '../../../../components';
import { createUserAction } from '../../../../actions/users';

const CreateUser = ({ handleSubmit }) => (
  <Fragment>
    <h1>Create</h1>
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

CreateUser.propTypes = {
  handleSubmit: PropTypes.func,
};

const formedContainer = reduxForm({
  form: 'createUser',
})(CreateUser);

export default connect(() => ({}), {
  onSubmit: createUserAction,
})(formedContainer);
