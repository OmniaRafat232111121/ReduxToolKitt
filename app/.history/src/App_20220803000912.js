import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Update from "./components/Update/Update";
import Rightbar from "./components/Rightbar/Rightbar";

function App() {
  const [nme,set]
  return (
    <>
    <Navbar/>
    <div className="container">
     <Leftbar/>
     <Update/>
     <Rightbar/>
    </div>
    </>
  );
}

export default App;
