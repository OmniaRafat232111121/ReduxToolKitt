import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

 const configureStore=()=>({
   reducers:{
    user:userReducer,
   } ,
})

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
    
   })
   export default store;