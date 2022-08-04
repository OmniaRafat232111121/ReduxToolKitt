import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


export default configureStore({
  reducer: {
    user: userR,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});