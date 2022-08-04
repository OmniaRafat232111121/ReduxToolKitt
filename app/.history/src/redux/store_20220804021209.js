import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export default configureStore({
   reducers:{
    user:userSlice
   } 
})
