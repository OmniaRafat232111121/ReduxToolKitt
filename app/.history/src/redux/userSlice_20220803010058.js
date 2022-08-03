import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState={
    name:"omnia",
    email:'omniarafat2321@gmail.com'
},
reducers:{
    updateUser(state,action){

    }
    deleteUser(state,action){}
},
});
export default userSlice;