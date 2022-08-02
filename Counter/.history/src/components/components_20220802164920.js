import React,{useState} from 'react'

const components = () => {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>({
        setCount(count+1);
    });

    const handleDecrement=()=>({
        setCount(count-1);
    });
  return (
    <div>
    <p>{count}</p>
    <button onClick={ha}>+</button>
    
    </div>
  )
}

export default components