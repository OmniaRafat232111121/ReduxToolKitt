import React from "react";

function App() {
  co state={
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
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
