import React from "react";
import { connect } from 'react-redux'
const App=()=>{

  
  const decrement = () => {
    this.setState({
      count:this.state.count-1
    })

    const increment = () => {
      this.setState({
        count:this.state.count+1
      })
  }
 
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <div>{this.state.count}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
 }
 const mapStateToProps = (state) => {
  return { count: state };
};

export default connect(mapStateToProps,null)(App)
}



