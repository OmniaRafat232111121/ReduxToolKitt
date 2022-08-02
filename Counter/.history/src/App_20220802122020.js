import React,{useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }
  const decrease=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  return (
    <div className="App">
      <button onClick={incr}>+</button>
      <div></div>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
