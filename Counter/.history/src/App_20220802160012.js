import React from "react";


c {
 increment = () => {
  this.setCount({
    count:this.state.count+1
  })
  decrement = () => {
    this.setCount({
      count:this.state.count-1
    })
  }
 
  return (
    <div className="App">
      <button onClick={this.increment}>+</button>
      <div></div>
      <button onClick={this.decrement}>-</button>
    </div>
  );

const mapStateToProps=(state)=>({
return {
  count:state.count
}
})
}

export default App;