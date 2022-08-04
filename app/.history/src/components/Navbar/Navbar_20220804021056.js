
import React from 'react'
import "./Navbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const name=useSelector(state=>state.user)
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
   <KeyboardArrowDownIcon/>
    </div>
    </div>
    </div>
  )
}

export default Navbar