import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';

const User = () => {
const user=useSelector(state=>state.use)
  return (
    <div onClick={FetchData}>

      click 
    </div>
  )
}

export default User