import React from "react";
import { connect } from 'react-redux'
function App (){

 
 
  return (

  );
 }

 const mapStateToProps = (state) => {
  return { count: state };
};

export default connect(mapStateToProps,null)(App)




