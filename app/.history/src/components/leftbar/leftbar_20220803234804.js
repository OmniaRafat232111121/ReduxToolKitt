
import React from "react";
import MenuLink from "../MenuLink/MenuLink";

  import "./Leftbar.css";
  import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
  import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
  import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeOutlinedIcon />} text="Homepage" />
          <MenuLink icon={<PlaylistAddCheckOutlinedIcon />} text="Lists" />
          <MenuLink icon={<ShoppingCartOutlinedIcon />} text="Products" />
          <MenuLink icon={<GroupsIcon />} text="Groups" />
        </div>
      </div>
    );
    }
   
   