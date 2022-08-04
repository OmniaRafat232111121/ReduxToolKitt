
import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const updateUser2=createAsyncThunk("users/update",async(user)=>{
    const response=await axios.post(
        "http://localhost:8800/api/users/1/update",
        user
    );

    return response.data
})
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "john",
      email: "john@email.com",
    },
    pending: null,
    error: false,
  },
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

