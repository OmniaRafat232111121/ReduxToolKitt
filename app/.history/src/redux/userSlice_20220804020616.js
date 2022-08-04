import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState={
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

//actions
/*
reducers:{
    action:{

    }
}
*/
export const {update}=userSlice.actions;
//reduc
export default userSlice.reducer