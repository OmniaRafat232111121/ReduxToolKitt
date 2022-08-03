import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./counterSlice";
const reducer = combineReducers({
    //reducers:{
    counter:counterSlice
} here we will be adding reducers
  })
const store= configureStore({
   
});
export default store;


import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
const reducer = combineReducers({
  // here we will be adding reducers
})
const store = configureStore({
  reducer,
})
export default store;