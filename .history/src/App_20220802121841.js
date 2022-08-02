import React,{use} from "react";

function App() {
  const [count, setCount] = useState(0)
  const increase=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  const decrease=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <div></div>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
