import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const store=confStore(counterReducer)