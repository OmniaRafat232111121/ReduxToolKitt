
import { createStore,applyMiddleware } from 'redux'
import counterReducer from "./reducers/counterReducer";
imp
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= createStor(counterReducer,enhancer(applyMiddleware()));
export default store;