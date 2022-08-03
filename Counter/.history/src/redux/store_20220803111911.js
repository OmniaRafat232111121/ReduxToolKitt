
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COM
const store= createStore(counterReducer);
export default store;