import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { INCREMENTACTION,DECREMENTACTION } from '../redux/actions/countertypes';
import {INC_VALUE} from '../redux/actions/countertypes'
export default function Counter()  {
    //const {count,setCount} = useState(0);
    const countState=useSelector(state=>state.count);
    const dispatch=useDispatch()
    console.log(countState)
    const handleIncrement=()=>{
        dispatch(INCREMENTACTION());
    }

    const handleDecrement=()=>{
      dispatch(DECREMENTACTION());
    }

    const INC_VALUE=(value)=>{
      dispatch(INC_VALUE(value))
    }

  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{countState}</p>

    <button onClick={handleDecrement}>-</button>
    <button onClick={()=>INC_VALUE(7)}>Increment By</button>
    </div>
  )
}
