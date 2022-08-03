import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
const store= configureStore({
   reducers:{
    counter:counterSlice
   }
});
export default store;
