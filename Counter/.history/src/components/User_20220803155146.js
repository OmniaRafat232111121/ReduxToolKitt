import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { FetchAction } from '../redux/actions/';
export default function User() {
const user=useSelector(state=>state.user)
const dispatch=useDispatch();


     ؤخىسفhandleFetchData=()=>{
        FetchAction(dispatch);
    }
}
  return (
    <button onClick={handleFetchData}>
     <p>{user}</p>
    
    </button>
  )
}