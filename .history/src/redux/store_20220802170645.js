import { configureStore } from "redu";
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;