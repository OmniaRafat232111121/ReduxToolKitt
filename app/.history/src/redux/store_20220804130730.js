import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

 constconfigureStore=()=({
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