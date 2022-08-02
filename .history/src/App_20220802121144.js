import React from "react";

function App() {
  const state={
    count:0,
  }
  increase=()=>{
    this.setState({
      count:this.state.count+1
    })
  }
  decrease=()=>{
    this.setState({
      count:this.state.count-1
    })
  }
  return (
    <div className="App">
      <button onClick={increase}>+</button>
      <div></div>
      <buttononClick={decrease}>-</buttononClick=>
    </div>
  );
}

export default App;
