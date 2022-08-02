import React, { useState } from 'react'
import { useSelector } from 'react-redux/es/exports';
export default function Counter()  {
    const {count,setCount} = useState(0);
    const countState=useSelector(state=>state.count);
    const di
    console.log(countState)
    const handleIncrement=()=>{
        setCount(count+1);
    }

    const handleDecrement=()=>{
        setCount(count-1);
    }
  return (
    <div>

    <button onClick={handleIncrement}>+</button>
    <p>{countState}</p>

    <button onClick={handleDecrement}>-</button>
    
    </div>
  )
}
