import {updateStart,updateSuccess,updateError} from './userSlice'
export const updateUser=async(user,dispatch)=>{
dispatch(updateStart());
try{
   const re=await 
}catch(err){
    dispatch(updateError);
}
}