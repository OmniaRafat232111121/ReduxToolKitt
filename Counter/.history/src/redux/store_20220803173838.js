import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
import { combineReducers } from 'redux'
const reducer = combineReducers({
    reducers:{
    counter:counterSlice
} 
  })
const store= configureStore({
    reducers:{
        counter:counterSlice
    } 
});
export default store;

