import React,{ useState } from 'react'

export default function counter()  {
    const {count,setCount} = useState(0);
    const handleIncrement=()=>{
        setCount(count+1);
    };

    const handleDecrement=()=>{
        setCount(count-1);
    };
  return (
    <div>
    <p>{count}</p>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    
    </div>
  )
}
