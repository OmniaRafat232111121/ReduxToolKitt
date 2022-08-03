import { createSlice } from "@reduxjs/toolkit/dist/createSlice"

export const counterSlice=createSlice({
name:'counter',
initialState:{
    :0
},
  reducers:{
    increment:(state)=>{
        state.+=1
    },
    decrement:(state)=>{
        state.-=1
    },
    incrementByAmount:(state,action)=>{
        state.+=action.payload
    }
  }
})
//actions
export const {increment,decrement,incrementByAmount}=counterSlice.actions
//reducer
export default counterSlice.reducer