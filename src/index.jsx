import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import routes from './routes';
import appStore from './reducers/index.js';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);


ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(appStore) }>
    <Router history={ browserHistory } routes={ routes }/>
  </Provider>
  , document.querySelector('#root')
);