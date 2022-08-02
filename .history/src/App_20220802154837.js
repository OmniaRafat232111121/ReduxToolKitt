import React from "react";

function App() {

  const increment = () => {
  this.setCount({
    count:this
  })
  const decrement = () => {
    this.setCount(count =>count -1)
  }
 
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <div></div>
      <button onClick={decrement}>-</button>
    </div>
  );
}
function mapStateToProps(state){
  return{
    count:state.count
  }

}
export default App;
