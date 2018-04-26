import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import UsersList from './read/list';

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
      <Route exact path="/users/:userId" component={undefined} />
      <Route exact path="/users/:userId/update" component={undefined} />
      <Route exact path="/users/create" component={undefined} />
    </Switch>
  </Fragment>
);

export default UsersPage;
