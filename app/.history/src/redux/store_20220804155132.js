import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


export default configureStore({
  reducer: {
    user: userRe,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});