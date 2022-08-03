// import ArrowDropDown from '@material-ui/icons'
import React from 'react'
import "./Navbar.css"
const Navbar = () => {
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
    <img className="avatar"src="https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?cs=srgb&dl=pexels-clara-ngo-3866555.jpg&fm=jpg"/>
    <span className="navbarName"> </span>
   
    </div>
    </div>
    </div>
  )
}

export default Navbar