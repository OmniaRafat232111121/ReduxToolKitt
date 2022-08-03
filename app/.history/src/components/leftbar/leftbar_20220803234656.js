
import React from "react";
import MenuLink from "../MenuLink/MenuLink";

  import "./Leftbar.css";
  import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
  import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeOutlinedIcon />} text="Homepage" />
          <MenuLink icon={<Li />} text="Lists" />
        </div>
      </div>
    );
    }
   
   