import { createSlice } from "@reduxjs/toolkit/dist/createSlice"

export const counterSlice=createSlice({
name:'counter',
initialState:{
    count:0
},
  reducers:{
    increment:(state)=>{
        state.count+=1
    },
    decrement:(state)=>{
        state.count-=1
    },
    incrementByAmount:(state,action)=>{
        state.count+=action.payload
    }
  }
})
//actions
red
export const {increment,decrement,incrementByAmount}=counterSlice.actions
//reducer
export default counterSlice.reducer