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
  return (
    <div className="App">
      <button onClick={i}>+</button>
      <div></div>
      <button>-</button>
    </div>
  );
}

export default App;
