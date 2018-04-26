import React, { Fragment } from 'react';
import createBrowserHistory from 'history/createBrowserHistory'; // eslint-disable-line
import { Route, Switch, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as MobxProvider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

// THEME
// /////
import defaultTheme from './styles/theme';

// STORES
// //////
import stores from './stores';

// LAYOUT
// //////
import { Header, Page } from './components';
import UsersPage from './pages/users';

const browserHistory = createBrowserHistory();

const config = {
  action: true,
  compute: false,
  predicate: () => true,
  reaction: false,
  transaction: false,
};

const links = [
  { label: 'Users', value: '/users' },
];

enableLogging(config);

const MainApp = () => (
  <ThemeProvider theme={defaultTheme}>
    <Router history={browserHistory}>
      <MobxProvider {...stores}>
        <Fragment>
          <Header links={links} />
          <Page>
            <Switch>
              <Route exact path="/" component={undefined} />
              <Route path="/users" component={UsersPage} />
            </Switch>
          </Page>
        </Fragment>
      </MobxProvider>
    </Router>
  </ThemeProvider>
);

export default MainApp;
