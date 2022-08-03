import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import  from "..//";
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        < type="user" />
        < type="popular" />
        < type="editor" />
        <button className="rightButton">
          See More
          <KeyboardArrowDownIcon/>
        </button>
      </div>
    </div>
  );
}