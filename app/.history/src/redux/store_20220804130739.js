import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
   reducers:{
    user:userSlic,
   } 
})

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});