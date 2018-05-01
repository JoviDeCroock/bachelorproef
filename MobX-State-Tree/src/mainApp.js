import React, { Fragment } from 'react';
import Async from 'react-code-splitting';
import createBrowserHistory from 'history/createBrowserHistory'; // eslint-disable-line
import { Route, Switch, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as MobxProvider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';
import { hot } from 'react-hot-loader';

// THEME
// /////
import defaultTheme from './styles/theme';

// STORES
// //////
import stores from './stores';

// LAYOUT
// //////
import { Header, Page } from './components';

// PAGES
// /////
const UsersPage = props => <Async load={import('./pages/users')} componentProps={props} />;
const HomePage = props => <Async load={import('./pages/home')} componentProps={props} />;

const browserHistory = createBrowserHistory();
const config = {
  action: true,
  compute: true,
  predicate: () => true,
  reaction: true,
  transaction: true,
};

const links = [
  { label: 'Users', value: '/' },
];

if (process.env.NODE_ENV !== 'production') { enableLogging(config); }

const MainApp = () => (
  <ThemeProvider theme={defaultTheme}>
    <Router history={browserHistory}>
      <MobxProvider {...stores}>
        <Fragment>
          <Header links={links} />
          <Page>
            <Switch>
              <Route exact path="/xD" component={HomePage} />
              <Route path="/" component={UsersPage} />
            </Switch>
          </Page>
        </Fragment>
      </MobxProvider>
    </Router>
  </ThemeProvider>
);

export default hot(module)(MainApp);
