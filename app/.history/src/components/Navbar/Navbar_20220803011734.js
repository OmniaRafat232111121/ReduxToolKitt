import React from 'react'

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
    <img className="avatar" alt="image" src="/src/images/bab.jpeg"/>
    <span className="navbar"> </span>
    </div>
    </div>
    
    </div>
  )
}

export default Navbar