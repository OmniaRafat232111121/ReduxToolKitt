import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./reducer/counterReducer";

const store=configureStore(counterReducer);
export default store;