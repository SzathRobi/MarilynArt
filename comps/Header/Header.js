import React, { useState } from "react";

//import logo from "./logo.jpg";
import Image from "next/image"
import Menu from "./Menu/Menu";

import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Drawer,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Link  from "next/link";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import { makeStyles } from "@material-ui/core";
//import { useSelector } from "react-redux";
import headerStyles from "../../styles/Header.module.css"
const useStyles = makeStyles({
  root: {
    backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  },
  hamburger: {
    margin: "0 10px 0 auto",
    color: "#f4f4f4",
  },
  logo: {
    height: 55,
    borderRadius: "50%",
  },
});

const Header = () => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const updateDrawerOpen = () => setDrawerOpen(!drawerOpen);

  //const user = useSelector(state => state.user)
  const jsonToken = null
 const user = {
  username: "John",
  role: "admin"
 }

  return (
    <div>
      <div className={headerStyles.header}>
       
          <Image src="/logo.jpg" id="hamburger" className={headerStyles.logo} width={55} height={55}/>
          <Typography>{user && `hello ${user.username} (${user.role})`}</Typography>
          <IconButton onClick={updateDrawerOpen} className={headerStyles.hamburger}>
            <MenuRoundedIcon className={headerStyles.subburger} fontSize="large" />
          </IconButton>
        
      </div>
      {<Menu drawerOpen={drawerOpen} updateDrawerOpen={updateDrawerOpen} />
      }
      
    </div>
  );
};

export default Header;
