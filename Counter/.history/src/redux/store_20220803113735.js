
import { confi } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
const store= confi(counterReducer,enhancer());
export default store;