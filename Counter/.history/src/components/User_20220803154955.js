import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { FetchAction } from '../redux/actions/usertypes';
const User = () => {
const user=useSelector(state=>state.user)
const dispatch=useDispatch();

const FetchData=()=>{
     handleFetchData=()=>{
        FetchAction(dispatch);
    }
}
  return (
    <button onClick={handleFetchData}>
     <p>{user}</p>
    
    </button>
  )
}

export default User