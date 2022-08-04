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
    {(state={});
},addHello:(state,action)=>{
    state.name="Hello"+action.payload;
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
export const {update,remove,addHello}=userSlice.actions;
//reducers
export default userSlice.reducer