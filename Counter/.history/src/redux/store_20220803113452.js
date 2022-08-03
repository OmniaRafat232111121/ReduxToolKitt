
import { configur } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
const store= configur(counterReducer,enhancer());
export default store;