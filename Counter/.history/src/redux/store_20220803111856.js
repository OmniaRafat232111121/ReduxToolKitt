
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__REDUX_DEVTOOL
const store= createStore(counterReducer);
export default store;