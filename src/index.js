import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import store from './redux/store';
import { Provider, connect } from 'react-redux';
// import { legacy_createStore as createStore, applyMiddleware} from 'redux';
// import { setVariable } from './redux/reducers';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './redux/category';

const logger = createLogger();
const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
