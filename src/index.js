import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function logger(obj, next, action)
// function logger(obj)(next)(action)
const logger = ({ dispatch, getState }) => (next) => (action) => {
  // logger code
  if (typeof action !== 'function') {
    console.log('ACTION TYPE = ', action.type);
  }
  next(action);
};

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//   // logger code
//   if(typeof action == 'function') {
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log('store', store);
console.log('Initital State', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
