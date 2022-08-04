// import { createSlice } from "@reduxjs/toolkit";

// const userSlice=createSlice({
// name:'user',
// initalState:{
//     name:"omnia",
//     email:'omniarafat2321@gmail.com'
// },
// reducers:{
//     update:(state,action)=>{
//      state.name=action.payload.name;
//      state.email=action.payload.email;
//     }
// }
// });



// //actions
// /*
// reducers:{
//     action:{

//     }
// }
// */
// export const {update}=userSlice.actions;
// //reducers
// export default userSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     userInfo: {
//       name: "john",
//       email: "john@email.com",
//     },
//     pending: false,
//     error: false,
//   },
//   reducers: {
//     updateStart: (state) => {
//       state.pending = true;
//     },
//     updateSuccess: (state, action) => {
//       state.pending = false;
//       state.userInfo = action.payload;
//     },
//     updateFailure: (state) => {
//       state.pending = false;
//       state.error = true;
//     },
//   },
// });

// export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

// export default userSlice.reducer;