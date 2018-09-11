import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { Provider } from 'react-redux';
import './main.css';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);