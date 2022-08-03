
import React from "react";
import MenuLink from "../MenuLink/MenuLink";

  import "./Leftbar.css";
  
  import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeOutlinedIcon />} text="Homepage" />
          <MenuLink icon={<ListIcon />} text="Lists" />
        </div>
      </div>
    );
    }
   
   