import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
//import Leftbar from "./components/Leftbar/Leftbar";
import Update from "./components/update/update";
import Rightbar from "./components/Rightbar/Rightbar";
import Leftbar from "./components/Leftbar/Leftbar";

function App() {
  const [name,setName]=useState('omnia');
  return (
    <>
     
    display:flex;
    align-items: center;
    justify-content: center;
    </>
  );
}

export default App;
