import React from "react";
import { connect } from 'react-redux'
function App (){

 
 
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <div>{this.props.count}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
 }

 const mapStateToProps = (state) => {
  return { count: state };
};

export default connect(mapStateToProps,null)(App)




