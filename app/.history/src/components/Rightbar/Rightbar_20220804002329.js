import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";
import recommendatio from "../recommendatio/recommendatio";
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <recommendatio type="user" />
        <recommendatio type="popular" />
        <recommendatio type="editor" />
        <button className="rightButton">
          See More
          <KeyboardArrowDownIcon/>
        </button>
      </div>
    </div>
  );
}