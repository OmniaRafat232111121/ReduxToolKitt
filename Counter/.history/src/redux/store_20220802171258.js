import { configureStore } from 'r';
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;