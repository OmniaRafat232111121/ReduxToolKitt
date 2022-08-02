import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Update from "./components/Update/Update";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
     <Leftbar/>
     <Update/>
     <
    </div>
    </>
  );
}

export default App;
