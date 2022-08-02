import { configureStore } from 'redux-devtools-extension';
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;