import React, { useState } from 'react'

export default function Counter()  {
    const {count,setCount} = useState(0);
    const =useSelector(state=>state.count)
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
