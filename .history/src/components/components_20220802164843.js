import React,{useState} from 'react'

const components = () => {
    const [count,setCount]=useState(0);
    const handleIncrement=()=>({
        setCount(count+1);
    });

    const handleDrement=()=>({
        setCount(count+1);
    });
  return (
    <div>
    
    
    </div>
  )
}

export default components