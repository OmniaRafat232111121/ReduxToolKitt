import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


export default configureStore({
  reducer: {
    user: userReduce,
  },
  // reducer: {
  //   user: userReducer,
  //   post: postReducer,
  // },
});