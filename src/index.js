import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'Hello React with Webpack an Babel.';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);

module.hot.accept();