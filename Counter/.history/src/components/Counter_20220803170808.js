import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { INCREMENTACTION,DECREMENTACTION,INC_VALUEACTION} from '../redux/actions/countertypes';
import { decrement, increment } from '../redux/counterSlice';

export default function Counter()  {
    const countState=useSelector(state=>state.counter);
    const dispatch=useDispatch()
    console.log(countState)
    const handleIncrement=()=>{
        dispatch(increment());
    }
    const handleDecrement=()=>{
         dispatch(decrement());
    }
    const handleIncrementByValue=(v1)=>{
         dispatch(i)
    }
  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{countState}</p>

    <button onClick={handleDecrement}>-</button>
    <br/>
    <br/>
    <button onClick={()=>handleIncrementByValue(8)}>Increment By 8</button>
    </div>
  )
}
