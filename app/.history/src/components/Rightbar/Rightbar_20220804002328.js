import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import recommendat from "../recommendat/recommendat";
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <recommendat type="user" />
        <recommendat type="popular" />
        <recommendat type="editor" />
        <button className="rightButton">
          See More
          <KeyboardArrowDownIcon/>
        </button>
      </div>
    </div>
  );
}