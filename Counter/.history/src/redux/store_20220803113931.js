
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= createStore(counterReducer,enhancer());
export default store;