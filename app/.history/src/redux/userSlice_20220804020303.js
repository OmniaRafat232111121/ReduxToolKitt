import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState={
    name:"omnia",
    email:'omniarafat2321@gmail.com'
},
reducers:{
    update:(state,action)=>{
     action.payload
    }
}
});
export default userSlice;