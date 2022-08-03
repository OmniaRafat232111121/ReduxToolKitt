import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from "react";

import Recommendation from '../recommendation/recommendation';
import "./Rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <recommendation type="user" />
        <Recommendation type="popular" />
        <Recommendation type="editor" />
        <button className="rightButton">
          See More
          <KeyboardArrowDownIcon/>
        </button>
      </div>
    </div>
  );
}