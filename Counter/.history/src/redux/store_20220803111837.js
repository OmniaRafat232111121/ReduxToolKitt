
import { createStore } from 'redux'
import counterReducer from "./reducers/counterReducer";
const enhancer
const store= createStore(counterReducer);
export default store;