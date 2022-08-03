
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=wi
const store= createStore(counterReducer);
export default store;