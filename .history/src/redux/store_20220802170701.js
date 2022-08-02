import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer);
export default store;