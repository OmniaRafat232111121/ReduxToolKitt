import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { FetchData } from '../redux/actions/types';
const User = () => {
const user=useSelector(state=>state.user)
const dispatch=useDispatch();

const FetchData=()=>{
    const Fet=()=>{
        FetchData(dispatch);
    }
}
  return (
    <div onClick={FetchData}>

      click 
    </div>
  )
}

export default User