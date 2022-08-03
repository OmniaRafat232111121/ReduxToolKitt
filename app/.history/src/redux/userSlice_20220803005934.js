import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
name:'user',
initalState={
    name:"omnia",
    email:
};
reducers:{
    createUser(state,action){}
    updateUser(state,action){}
    deleteUser(state,action){}
}
});
export default userSlice;