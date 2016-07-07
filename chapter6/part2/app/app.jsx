/*
 * @file main file for app deskmark
 */

import React from 'react';
import { render } from 'react-dom';
import { bindActionCreators, createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import Deskmark from 'components/Deskmark';
import rootReducer from 'reducers';
import * as actionCreators from 'actions';

import 'bootstrap/scss/bootstrap.scss';

// create store with middlewares
const store = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware()
)(createStore)(rootReducer);

// create root component based on component Deskmark
const App = connect(
  state => ({ state }),
  dispatch => ({
    actions: bindActionCreators(actionCreators, dispatch),
  })
)(Deskmark);

// create DOM container
const container = document.body.appendChild(
  document.createElement('div')
);

// render root conponent with store to DOM container
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
