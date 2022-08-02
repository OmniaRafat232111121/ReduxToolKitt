import React,{useState} from 'react'

const components = () => {
    const [count,setCount]=useState(0);
    const handleIncrement=(count)=>({
        setCount(count+1);
    })
  return (
    <div>
    
    
    </div>
  )
}

export default components