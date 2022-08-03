import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState={
    name:"omnia",
    
};
reducers:{
    createUser(state,action){}
    updateUser(state,action){}
    deleteUser(state,action){}
}
});
export default userSlice;