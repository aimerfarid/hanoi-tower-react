import {render} from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/tower';
import reducer from './components/reducer';

let store = createStore(reducer);

// window.onload = () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>,
//     document.getElementById('root')
//   );
// };

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
