import React from "react";

export const App=()=>({
  
}) 

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
      <button onClick={this.decrement}>-</button>
    </div>
  );
}
function mapStateToProps(state){
  return{
    count:state.count
  }

}
}
