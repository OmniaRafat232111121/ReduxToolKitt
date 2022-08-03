import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { INCREMENTACTION,DECREMENTACTION, } from '../redux/actions/countertypes';
import {INC_VALUE} from '../redux/actions/countertypes'
export default function Counter()  {

    const countState=useSelector(state=>state.count);
    const dispatch=useDispatch()
    console.log(countState)
    const handleIncrement=()=>{
        dispatch(INCREMENTACTION());
    }
    const handleDecrement=()=>{
         dispatch(DECREMENTACTION());
    }
    const handleIncrementByValue=(v1)=>{
          dispatch(INC_VALUE(v1))
    }
  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{countState}</p>

    <button onClick={handleDecrement}>-</button>
    <button onClick={()=>handleIncrementByValue(8)}>Increment By 8</button>
    </div>
  )
}
