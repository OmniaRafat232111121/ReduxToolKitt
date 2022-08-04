import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState:{
    name:"omnia",
    email:'omniarafat2321@gmail.com'
},
pending:false,
error:false,
reducers:{ 
    u
}
});



//actionn
export const {update,remove,addHello}=userSlice.actions;
//reducers
export default userSlice.reducer