import React from "react";


function App(){
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

const mapStateToProps = (state) => {
    return { bookDat: state };
};
}

export default App;