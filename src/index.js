import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducerForMembers from "./store/reducers/reducerForMembers";
import reducerForUsers from "./store/reducers/reducerForUsers";

//$> npm i react-redux
import { Provider } from 'react-redux';
//$> npm i redux
import { createStore, combineReducers, applyMiddleware } from "redux";
//$> npm i redux-thunk
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  rMembers: reducerForMembers,
  rUsers: reducerForUsers
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
