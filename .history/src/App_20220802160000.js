import React from "react";


class App extends Component {

   increment = () => {
  this.setCount({
    count:this.state.count+1
  })
  constdecrement = () => {
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