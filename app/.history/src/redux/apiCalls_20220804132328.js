import {updateStart,updateSuccess,updateError} from './userSlice'
export const updateUser=async(user,dispatch)=>{
dispatch(updateStart());
try{
   const re=await axios.post("http:localhost:8800//api/users/:id/update")
  
}
catch(err){
    dispatch(updateError);
}
}