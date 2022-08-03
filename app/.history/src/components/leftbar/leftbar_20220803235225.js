
import React from "react";
import MenuLink from "../MenuLink/MenuLink";
import "./Leftbar.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
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
          <MenuLink icon={<GroupOutlinedIcon />} text="Groups" />
          <MenuLink icon={<PagesOutlinedIcon />} text="Pages" />
          <MenuLink icon={<AddAPhotoIcon />} text="Photos" />
          <MenuLink icon={<MissedVideoCallIcon />} text="Videos" />
          <MenuLink icon={< />} text="Schedule" />
          <MenuLink icon={<HearingOutlined />} text="Wishlist" />
          <MenuLink icon={<SettingsApplicationsIcon />} text="Settings" />
          <MenuLink icon={<LogoutIcon />} text="Logout" />
        </div>
      </div>
    );
    }
   
   