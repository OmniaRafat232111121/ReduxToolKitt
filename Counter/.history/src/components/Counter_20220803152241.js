import React from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
import { INCREMENTACTION,DECREMENTACTION,INC_VALUEACTION} from '../redux/actions/countertypes';
export default function Counter()  {
    const {count}=useSelector(state=>state.coun);
    const dispatch=useDispatch()
    console.log(count)
    const handleIncrement=()=>{
        INCREMENTACTION(dispatch);
    }
    const handleDecrement=()=>{
         DECREMENTACTION(dispatch);
    }
    const handleIncrementByValue=(v1)=>{
          INC_VALUEACTION(v1,dispatch);
    }
  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{count}</p>

    <button onClick={handleDecrement}>-</button>
    <br/>
    <br/>
    <button onClick={()=>handleIncrementByValue(8)}>Increment By 8</button>
    </div>
  )
}
