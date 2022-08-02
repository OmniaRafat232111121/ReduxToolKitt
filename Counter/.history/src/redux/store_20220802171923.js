import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;