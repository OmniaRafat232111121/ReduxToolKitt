import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
//import counterReducer from "./reducers/counterReducer";

//const enhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store= combinStore({
   reducers:{
    counter:counterSlice,
   }
});
export default store;
