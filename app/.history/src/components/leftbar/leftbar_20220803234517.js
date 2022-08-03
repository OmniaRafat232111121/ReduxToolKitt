
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
          <MenuLink icon={<ShoppingBasketIcon />} text="Products" />
          <MenuLink icon={<GroupsIcon />} text="Groups" />
          <MenuLink icon={<AutoStoriesIcon />} text="Pages" />
          <MenuLink icon={<AddToPhotosIcon />} text="Photos" />
          <MenuLink icon={<VideoSettingsIcon  />} text="Videos" />
          <MenuLink icon={<CalendarMonthOutlinedIcon />} text="Schedule" />
          <MenuLink icon={<HearingOutlined />} text="Wishlist" />
          <MenuLink icon={<SettingsApplicationsIcon />} text="Settings" />
          <MenuLink icon={<LogoutIcon />} text="Logout" />
        </div>
      </div>
    );
    }
   
   