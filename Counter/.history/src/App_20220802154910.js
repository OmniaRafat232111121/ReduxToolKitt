import React from "react";

function App() {

  const increment = () => {
  this.setCount({
    count:this.state.count+1
  })
  const decrement = () => {
    this.setCount({
      count:this.state.count-1
    })
  }
 
  return (
    <div className="App">
      <button onClick={this.increment}>+</button>
      <div></div>
      <button onClick={tdecrement}>-</button>
    </div>
  );
}
function mapStateToProps(state){
  return{
    count:state.count
  }

}
export default App;
