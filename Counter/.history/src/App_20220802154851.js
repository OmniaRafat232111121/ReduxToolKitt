import React from "react";

function App() {

  const increment = () => {
  this.setCount({
    count:this.state.count+1
  })
  const decrement = () => {
 
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
