import {updateStart,updateSuccess,updateError} from './userSlice'
export const updateUser=async(user,dispatch)=>{
dispatch(updateStart());
try{
   const re=await .post("http:localhost:8800//api/users/:id/update")
    dispatch(updateStart(res.data))
}
catch(err){
    dispatch(updateError);
}
}