import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState={
    name:"omnia",
    email:'omniarafat2321@gmail.com'
},
reducers:{
    update:(state,action)=>{
     state.name=action
    }
}
});
export default userSlice;