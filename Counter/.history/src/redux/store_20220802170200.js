import { confieStore } from "redux";
import counterReducer from "./reducers/counterReducer";

const store=configureStore(counterReducer)