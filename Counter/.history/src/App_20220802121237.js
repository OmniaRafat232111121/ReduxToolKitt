import React from "react";

function App() {
  const state={
    count:0,
  }
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
      <button onClick={thisincrease}>+</button>
      <div></div>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;