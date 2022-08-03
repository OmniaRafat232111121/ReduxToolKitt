
import { createStore,applyMiddleware } from 'redux'
import counterReducer from "./reducers/counterReducer";
import redux-Thub
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= createStore(counterReducer,enhancer(applyMiddleware()));
export default store;