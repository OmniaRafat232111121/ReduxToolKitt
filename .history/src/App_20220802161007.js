import React from "react";
import { connect } from 'react-redux'
const App=()=>{
  increment = () => {
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
      <button onClick={i}>+</button>
      <div></div>
      <button onClick={decrement}>-</button>
    </div>
  );
 }
}

const mapStateToProps = (state) => {
    return { count: state };
};
export default connect(mapStateToProps,null)(App)