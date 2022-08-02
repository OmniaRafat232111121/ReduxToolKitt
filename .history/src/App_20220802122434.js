import React,{useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count => count + 1)
  }
  const decrement = () => {
    setCount(ount =>count -1)
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
