import React from "react";

function App() {
  const state={
    count:0,
  }
  increase=()=>{
    this.setState({
      count:this.state.count
    })
  }
  return (
    <div className="App">
      <button>+</button>
      <div></div>
      <button>-</button>
    </div>
  );
}

export default App;
