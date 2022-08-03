import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
//import Leftbar from "./components/Leftbar/Leftbar";
import Update from "./components/update/update";
import Rightbar from "./components/Rightbar/Rightbar";
import Leftbar from "./components/leftbar/leftbar";

function App() {
  const [name,setName]=useState('omnia');
  return (
    <>
    <Navbar name={name}/>
    <div className="container">
     <Leftbar
     <Update/>
     <Rightbar/>
    </div>
    </>
  );
}

export default App;
