import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
     <Leftbar/>
     <Up
    </div>
    </>
  );
}

export default App;
