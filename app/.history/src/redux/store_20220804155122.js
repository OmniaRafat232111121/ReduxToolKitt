import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


export default configureStore({
  reducer: {
    user: userRed,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});