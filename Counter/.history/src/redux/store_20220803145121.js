
import { createStore,applyMiddleware } from 'redux'
import counterReducer from "./reducers/counterReducer";
import redux-Thunk from'redux-Thunk'
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= createStore(counterReducer,enhancer(applyMiddleware()));
export default store;