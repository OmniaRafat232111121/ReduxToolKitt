import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';

const User = () => {
const user=useSelector()
  return (
    <div onClick={FetchData}>

      click 
    </div>
  )
}

export default User