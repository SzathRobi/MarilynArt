import React from "react";

import Link from "next/link";

import {
  Drawer,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge
} from "@material-ui/core";

import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import StoreMallDirectoryRoundedIcon from "@material-ui/icons/StoreMallDirectoryRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';

//import {useSelector, useDispatch} from "react-redux"

import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  root: {},
  closeBtn: {
    position: "relative",
    right: 30
  },
  divider: {
    margin: "10px 0 0 0"
  }
});

const Menu = ({ drawerOpen, updateDrawerOpen }) => {
  const classes = useStyles();

  //const dispatch = useDispatch()
  //const jsonToken = useSelector(state => state.jsonToken)

  /*const logOut = () => {
    dispatch({ type: 'getToken', payload: null })
    updateDrawerOpen()
  }

  const user = useSelector(state => state.user)
*/
const jsonToken = null

const user = {
  role: "admin"
}
  return (
    <Drawer variant="persistent" anchor="right" open={drawerOpen}>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            <IconButton onClick={updateDrawerOpen} className={classes.closeBtn}>
              <CloseRoundedIcon />
            </IconButton>
            Menü
          </ListSubheader>
        }
      >
        <Link href="/" onClick={updateDrawerOpen}>
          <ListItem button>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Főoldal" />
          </ListItem>
        </Link>
        <Link href="/shop" onClick={updateDrawerOpen}>
          <ListItem button>
            <ListItemIcon>
              <StoreMallDirectoryRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Bolt" />
          </ListItem>
        </Link>
        <Link href="/contact" onClick={updateDrawerOpen}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Kapcsolat" />
          </ListItem>
        </Link>
        <Divider />
     
        <Link href={jsonToken === null ? "/login" : "/MarilynArt"} onClick={jsonToken === null ? updateDrawerOpen : logOut}>
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary={jsonToken !== null ? "Kijelentkezés" : "Bejelentkezés"} />
          </ListItem>
        </Link>
       
        <Link href="/cart" onClick={updateDrawerOpen}>
          <ListItem button>
            <ListItemIcon>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartRoundedIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Kosár" />
          </ListItem>
        </Link>
        <Divider />
        {user && user.role === "admin"  
          && <Link href="/adminpanel" onClick={updateDrawerOpen}>
           <ListItem button>
            <ListItemIcon>
              <DashboardRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Adminpanel" />
          </ListItem>
          </Link>
        }
      </List>
    </Drawer>
  );
};

export default Menu;
