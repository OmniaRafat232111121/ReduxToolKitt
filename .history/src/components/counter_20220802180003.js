import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux/es/exports';
export default function Counter()  {
    const {count,setCount} = useState(0);
    const countState=useSelector(state=>state.count);
    const dispatch=useDispatch()
    console.log(countState)
    const handleIncrement=()=>{
        dispatch({
          type:'INCREMENT'
        });
    }

    const handleDecrement=()=>{
        
    }
  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{countState}</p>

    <button onClick={handleDecrement}>-</button>
    
    </div>
  )
}
