import React from 'react'
import { useSelector } from "react-redux";
const Navbar = () => {
    const name =useSelector((state=> state.user.userInfo));
  return (
    <div className="navbar">
    <div className="navbarWrapper">
    <div className="navbarLeft">
    <span className="logo">Omnia Rafat</span>
    <span className="navbarLink">Home</span>
    <span className="navbarLink">About</span>
    <span className="navbarLink">Contact</span>
    </div>
    <div classNme="navbarCenter">
    <div className="search">
    <input
    type="text"
    placeholder="search for something..."
    className="searchInput"
    />
    </div>
    </div>
    <div className="navbarRight">
    <img className="avatar" alt="image" src="/src/images/bab.jpeg"/>
    <span className="navbarName"> </span>
    </div>
    </div>
    
    </div>
  )
}

export default Navbar