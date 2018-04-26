import React, { Fragment } from 'react';
import createBrowserHistory from 'history/createBrowserHistory'; // eslint-disable-line
import { Route, Switch, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as MobxProvider } from 'mobx-react';
import { enableLogging } from 'mobx-logger';

// THEME
import defaultTheme from './styles/theme';

const browserHistory = createBrowserHistory();

const config = {
  action: true,
  compute: false,
  predicate: () => true,
  reaction: false,
  transaction: false,
};

enableLogging(config);

const MainApp = () => (
  <ThemeProvider theme={defaultTheme}>
    <Router history={browserHistory}>
      <MobxProvider {...{}}>
        <Fragment>
          <Switch>
            <Route exact path="/" component={undefined} />
          </Switch>
        </Fragment>
      </MobxProvider>
    </Router>
  </ThemeProvider>
);

export default MainApp;
