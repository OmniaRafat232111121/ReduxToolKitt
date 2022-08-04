import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: "john",
      email: "john@email.com",
    },
    pending: false,
    error: false,
  },
    reducers: {
        update: (state, action) => {
          state.name = action.payload.name;
          state.email = action.payload.email;
        },
        remove: (state) => {
          state = null;
        },
        addHelloToName : (state, action) =>{
          state.name = "Hello " + action.payload.name
        }
  },
});

export const { update, remove, u } = userSlice.actions;

export default userSlice.reducer;