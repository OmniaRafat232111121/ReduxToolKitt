import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'reacredux/es/exports';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(reducer);
root.render(
  <React.StrictMode>
  <Provider  store={store}>
  <App />
  </Provider>
   
  </React.StrictMode>
);

