import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as HotLoaderContainer } from 'react-hot-loader';
import { configure } from 'mobx';

import injectNormalizedCss from './styles/normalize';
import MainApp from './mainApp';
import { seedData } from './api/users';

injectNormalizedCss();

seedData();

// True = only action based working
configure({ enforceActions: true });

// Render the app in a react-hot-loader container
const render = (Component) => {
  ReactDOM.render(
    <HotLoaderContainer>
      <Component />
    </HotLoaderContainer>,
    document.getElementById('root'),
  );
};

// Initial render
document.body.innerHTML += '<div id="root"></div>';
render(MainApp);

// Reloading
if (module.hot) {
  module.hot.accept('./mainApp', () => render(MainApp));
}
