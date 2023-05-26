import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton,Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912006/gmail-icon-md.png" alt="Gmail Logo"/>
      </div>

      <div className="header__middle">
        <SearchIcon/>
        <input placeholder="Search mail" type="text"/>
        <ArrowDropDownIcon className="header__inputCaret"/>
      </div>

      <div className="header__right">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <Avatar/>
      </div>
    </div>
  );
}

export default Header;
