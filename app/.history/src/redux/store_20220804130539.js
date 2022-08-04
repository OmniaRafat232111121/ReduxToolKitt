import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

 const configureStore=()=>({
   reducers:{
    user:userReducer,
   } ,
})


   const store = configureStore({
     reducers:{
      user:userReducer,
     } ,
   })
   export default store;