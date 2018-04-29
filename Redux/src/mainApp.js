import React, { Fragment } from 'react';
import Async from 'react-code-splitting';
import createBrowserHistory from 'history/createBrowserHistory'; // eslint-disable-line
import { Route, Switch, Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { hot } from 'react-hot-loader';

// Redux
// /////
import sagas from './sagas';
import reducers from './reducers';

// THEME
// /////
import defaultTheme from './styles/theme';

// LAYOUT
// //////
import { Header, Page } from './components';

// PAGES
// /////
const UsersPage = props => <Async load={import('./pages/users')} componentProps={props} />;
const HomePage = props => <Async load={import('./pages/home')} componentProps={props} />;

const browserHistory = createBrowserHistory();
const logger = createLogger({
  // So our actions are logged collapsed
  collapsed: true,
});

// Init sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Init the store
const store = createStore(
  reducers,
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(sagas);

const links = [
  { label: 'Users', value: '/' },
];


const MainApp = () => (
  <ThemeProvider theme={defaultTheme}>
    <Router history={browserHistory}>
      <Provider store={store}>
        <Fragment>
          <Header links={links} />
          <Page>
            <Switch>
              <Route exact path="/xD" component={HomePage} />
              <Route path="/" component={UsersPage} />
            </Switch>
          </Page>
        </Fragment>
      </Provider>
    </Router>
  </ThemeProvider>
);

export default hot(module)(MainApp);
