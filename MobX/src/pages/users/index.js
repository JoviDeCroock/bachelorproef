import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import UsersList from './read/list';
import UserDetail from './read/detail';
import Updateuser from './persist/update';
import CreateUser from './persist/create';

const Title = styled.h1`
  margin: 0;
  text-align: center;
  text-decoration: underline;
  width: 100%;
`;

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
