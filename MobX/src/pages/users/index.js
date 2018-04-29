import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Title } from '../../styles/common';

import UsersList from './read/list';
import UserDetail from './read/detail';
import Updateuser from './persist/update';
import CreateUser from './persist/create';

const UsersPage = () => (
  <Fragment>
    <Title>Users</Title>
    <Switch>
      <Route exact path="/users" component={UsersList} />
      <Route exact path="/users/:userId" component={UserDetail} />
      <Route exact path="/users/:userId/update" component={Updateuser} />
      <Route exact path="/users/create" component={CreateUser} />
    </Switch>
  </Fragment>
);

export default UsersPage;
