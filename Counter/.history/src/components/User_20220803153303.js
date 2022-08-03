import React from 'react'

import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { INCREMENTACTION,DECREMENTACTION,INC_VALUEACTION} from '../redux/actions/countertypes';

const User = () => {

  return (
    <div onClick={FetchData}>

      click 
    </div>
  )
}

export default User