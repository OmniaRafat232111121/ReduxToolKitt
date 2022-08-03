
import { configureStore } from '@reduxjs/toolkit';
import { configureStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
const store= configureStore(counterReducer,enhancer());
export default store;