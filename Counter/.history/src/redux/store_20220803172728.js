import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import counterReducer from "./reducers/counterReducer";
imp
const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= configureStore({
   reducers:{
    counter:counter
   }
});
export default store;