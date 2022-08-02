import { configureStore } from 're';
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;