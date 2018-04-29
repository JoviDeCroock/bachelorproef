import React, { Fragment } from 'react';
import Async from 'react-code-splitting';
import { Route, Switch } from 'react-router-dom';

import { Title } from '../../styles/common';

const UsersList = () => <Async load={import('./read/list')} />;
const UserDetail = () => <Async load={import('./read/detail')} />;
const Updateuser = () => <Async load={import('./persist/update')} />;
const CreateUser = () => <Async load={import('./persist/create')} />;

const UsersPage = () => (
  <Fragment>
    <Title>Users</Title>
    <Switch>
      <Route exact path="/users" component={UsersList} />
      <Route exact path="/users/:userId/view" component={UserDetail} />
      <Route exact path="/users/:userId/update" component={Updateuser} />
      <Route exact path="/users/create" component={CreateUser} />
    </Switch>
  </Fragment>
);

export default UsersPage;
