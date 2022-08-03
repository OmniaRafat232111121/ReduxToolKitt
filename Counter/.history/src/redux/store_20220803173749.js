import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
import { combineReducers } from 'redux'
const reducer = combineReducers({
    reducers:{
    counter:counterSlice
} 
  })
const store= configureStore({
   reducer,
});
export default store;

