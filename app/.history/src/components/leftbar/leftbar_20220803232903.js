import {
    ExitToAppOutlined,
    FileCopyOutlined,
    GroupOutlined,
    HearingOutlined,
    HomeOutlined,
    import HomeIcon from '@mui/icons-material/Home';
    List,
    MovieCreationOutlined,
    PhotoSizeSelectActualOutlined,
    ScheduleOutlined,
    Settings,
    ShoppingBasketOutlined,
  } from "@material-ui/icons";
  import React from "react";
import MenuLink from "../MenuLink/MenuLink";
 
  import "./Leftbar.css";
  
  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<Ho />} text="Homepage" />
          <MenuLink icon={<List />} text="Lists" />
          <MenuLink icon={<ShoppingBasketOutlined />} text="Products" />
          <MenuLink icon={<GroupOutlined />} text="Groups" />
          <MenuLink icon={<FileCopyOutlined />} text="Pages" />
          <MenuLink icon={<PhotoSizeSelectActualOutlined />} text="Photos" />
          <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
          <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
          <MenuLink icon={<HearingOutlined />} text="Wishlist" />
          <MenuLink icon={<Settings />} text="Settings" />
          <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
        </div>
      </div>
    );
    }