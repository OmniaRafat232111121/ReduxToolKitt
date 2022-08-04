import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState:{
     userInfo:{
    name:"omnia",
    email:'omniarafat2321@gmail.com'
}
},
pending:false,
error:false,
reducers:{ 
    updateStart:(state)=>{
        state.pending=true;
    },updateSuccess:(state,action)=>{
          state.pending=false;
          state.userInfo
    }
}
});



//actionn
export const {update,remove,addHello}=userSlice.actions;
//reducers
export default userSlice.reducer