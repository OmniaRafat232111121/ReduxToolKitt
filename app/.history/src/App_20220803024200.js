//import {useState} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Leftbar from "./components/Leftbar/Leftbar";
import Update from "./components/update/update";
import Rightbar from "./components/Rightbar/Rightbar";

function App() {
 // const [name,setName]=useState('omnia');
  return (
    <>
    <Navbar />
    <div className="container">
     <Leftbar/>
     <Update/>
     <Rightbar/>
    </div>
    </>
  );
}

export default App;
