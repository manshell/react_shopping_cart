import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/Home';
import Root from './Root';
import Navbar from './components/Main'
// import FloatCart from './components/FloatCart';


import './index.scss';

ReactDOM.render(
  <Root>
    <React.Fragment>
      <Navbar />
      {/* <App /> */}
      {/* <FloatCart /> */}
    </React.Fragment>
  </Root>,
  document.getElementById('root')
);
