import React, { useState } from 'react'
import {use}
export default function Counter()  {
    const {count,setCount} = useState(0);
    const countState=useSelector(state=>state.count);
    console.log(countState)
    const handleIncrement=()=>{
        setCount(count+1);
    }

    const handleDecrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
    <p>{count}</p>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    
    </div>
  )
}
