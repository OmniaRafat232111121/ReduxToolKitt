import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";


import React from "react";
import Recommendation from "../recommendation/Recommendation";
import "./ightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <Recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </div>
  );
}