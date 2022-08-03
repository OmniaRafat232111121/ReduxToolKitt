
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__
const store= createStore(counterReducer);
export default store;