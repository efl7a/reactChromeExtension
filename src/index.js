import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App url={window.location.href}/>,
  document.querySelector('#root')
);
