import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
i
const User = () => {
const user=useSelector(state=>state.user)
const dispatch=useDispatch();

const FetchData=()=>{
    const FetchData=()=>{
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