import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';

const User = () => {
const user=useSelector(state=>state.user)
const dispatch=useDispatch();

const FetchData=()=>{
    c
}
  return (
    <div onClick={FetchData}>

      click 
    </div>
  )
}

export default User