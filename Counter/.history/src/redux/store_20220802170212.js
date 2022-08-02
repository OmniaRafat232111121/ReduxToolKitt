import { configureStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);