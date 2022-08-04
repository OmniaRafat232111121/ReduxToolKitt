import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

 const configureStore=()=>({
   reducers:{
    user:userReducer,
   } ,
})
export default configureStore;
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

   const store = configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware().concat(loggerMiddleware),
     preloadedState,
     enhancers: [monitorReducersEnhancer],
   })