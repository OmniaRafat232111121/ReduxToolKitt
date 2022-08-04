import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

 consr  configureStore({
   reducers:{
    user:userReducer,
   } ,
})
export default
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";

// export default configureStore({
//   reducer: {
//     user: userReducer,
//   },
//   // reducer: {
//   //   user: userReducer,
//   //   post: postReducer,
//   // },
// });