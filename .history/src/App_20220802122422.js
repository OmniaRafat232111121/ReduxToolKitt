import React,{useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(preount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount -1)
  }
 
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <div></div>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
