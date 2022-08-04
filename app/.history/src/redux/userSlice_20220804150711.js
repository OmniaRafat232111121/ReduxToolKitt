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
  reducers:
  },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;