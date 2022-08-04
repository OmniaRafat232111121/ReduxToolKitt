import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});