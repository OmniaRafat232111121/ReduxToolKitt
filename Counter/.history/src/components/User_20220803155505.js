import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { FetchAction } from '../redux/actio';
export default function User() {
const user=useSelector(state=>state.user)
const dispatch=useDispatch();
console.log(user)
 const handleFetchData=()=>{
        FetchAction(dispatch);
    }

  return (
    <button onClick={ handleFetchData}>
     <p>{user}</p>
    
    </button>
  )
  }