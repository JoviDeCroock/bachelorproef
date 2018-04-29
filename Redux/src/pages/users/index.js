import React, { Fragment } from 'react';
import Async from 'react-code-splitting';
import { Route, Switch } from 'react-router-dom';

import { Title } from '../../styles/common';

const UsersList = props => <Async load={import('./read/list')} componentProps={props} />;
const UserDetail = props => <Async load={import('./read/detail')} componentProps={props} />;
const Updateuser = props => <Async load={import('./persist/update')} componentProps={props} />;
const CreateUser = props => <Async load={import('./persist/create')} componentProps={props} />;

const UsersPage = () => (
  <Fragment>
    <Title>Users</Title>
    <Switch>
      <Route exact path="/" component={UsersList} />
      <Route exact path="/:userId/view" component={UserDetail} />
      <Route exact path="/:userId/update" component={undefined} />
      <Route exact path="/create" component={undefined} />
    </Switch>
  </Fragment>
);

export default UsersPage;
