import {HomeIcon,
  ListIcon,
  ShoppingBasketIcon,
  GroupsIcon,
  AutoStoriesIcon,
  AddToPhotosIcon} from '@mui/icons-material';

//     FileCopyOutlined,
//     GroupOutlined,
//     HearingOutlined,
//     HomeOutlined,
  //   List,
  //   MovieCreationOutlined,
  //   PhotoSizeSelectActualOutlined,
  //   ScheduleOutlined,
  //   Settings,
  //   ShoppingBasketOutlined,
  // } from "@material-ui/icons";
  import React from "react";
import MenuLink from "../MenuLink/MenuLink";
 
  import "./Leftbar.css";

  export default function Leftbar() {
    return (
      <div className="leftbar">
        <div className="leftbarWrapper">
          <MenuLink icon={<HomeIcon />} text="Homepage" />
          <MenuLink icon={<ListIcon />} text="Lists" />
          <MenuLink icon={<ShoppingBasketIcon />} text="Products" />
          <MenuLink icon={<GroupsIcon />} text="Groups" />
          <MenuLink icon={<AutoStoriesIcon />} text="Pages" />
          <MenuLink icon={<AddToPhotosIcon />} text="Photos" />
          <MenuLink icon={<MovieCreationOutlined />} text="Videos" />
          <MenuLink icon={<ScheduleOutlined />} text="Schedule" />
          <MenuLink icon={<HearingOutlined />} text="Wishlist" />
          <MenuLink icon={<Settings />} text="Settings" />
          <MenuLink icon={<ExitToAppOutlined />} text="Logout" />
        </div>
      </div>
    );
    }
    