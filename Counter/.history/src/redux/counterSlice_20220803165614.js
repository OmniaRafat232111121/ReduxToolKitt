import { createSlice } from "@reduxjs/toolkit/dist/createSlice"

export const counterSlice=createSlice({
name:'counter',
initialState:{
    coun:0
},
  reducers:{
    increment:(state)=>{
        state.coun+=1
    },
    decrement:(state)=>{
        state.coun-=1
    },
    incrementByAmount:(state,action)=>{
        state.coun+=action.payload
    }
  }
})
//actions
export const {increment,decrement,incrementByAmount}=counterSlice.actions
//reducer
export default counterSlice.reducer