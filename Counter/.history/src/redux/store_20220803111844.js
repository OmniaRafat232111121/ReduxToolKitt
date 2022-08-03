
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__R
const store= createStore(counterReducer);
export default store;