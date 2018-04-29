import React from 'react';
import ReactDOM from 'react-dom';

import injectNormalizedCss from './styles/normalize';
import MainApp from './mainApp';

// Normalize our css
injectNormalizedCss();

// Render the app in a react-hot-loader container
const render = (App) => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

// Initial render
document.body.innerHTML += '<div id="root"></div>';
render(MainApp);

