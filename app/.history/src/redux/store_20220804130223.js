import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

 const configureStore=()=({
   reducers:{
    user:userReducer,
   } ,
})
export default configureStore
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