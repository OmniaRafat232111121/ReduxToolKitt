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
    },
    remove:(state)=>
    (state={});
    ,
},
});



//actions
/*
reducers:{
    action:{

    }
}
*/
export const {update,remove}=userSlice.actions;
//reducers
export default userSlice.reducer