import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userS,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});