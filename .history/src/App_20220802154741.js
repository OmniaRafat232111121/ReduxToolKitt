import React from "react";

function App() {

  const increment = () => {
    setCount(count => count + 1)
  }
  const decrement = () => {
    setCount(count =>count -1)
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
    count:state.
  }

}
export default App;
