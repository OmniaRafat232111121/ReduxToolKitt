import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;