import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Leftbar/>
    </div>
    </>
  );
}

export default App;
