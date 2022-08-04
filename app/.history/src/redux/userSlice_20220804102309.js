import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState:{
    name:"omnia",
    email:'omniarafat2321@gmail.com'
},
reducers:{
    update:(state,action)=>{
     state.name=action.payload.name;
     state.email=action.payload.email;
    }
}
});


import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "john",
    email: "john@email.com",
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
//actions
/*
reducers:{
    action:{

    }
}
*/
export const {update}=userSlice.actions;
//reducers
export default userSlice.reducer