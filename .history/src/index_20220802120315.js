import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store=createStore(r)
root.render(
  <React.StrictMode>
  <Provider  store={store}>
  <App />
  </Provider>
   
  </React.StrictMode>
);

