import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
//import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = () => {
 
  console.log("navbar rendered!");
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">Lama App</span>
          <span className="navbarLink">Home</span>
          <span className="navbarLink">About</span>
          <span className="navbarLink">Contact</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src=""
            alt=""
          />
          <span className="navbarName"></span>
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;


