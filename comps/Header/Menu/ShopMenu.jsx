import React, { useState } from "react";

import {
  Drawer,
  IconButton,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider
} from "@material-ui/core";

import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  closeBtn: {
    position: "relative",
    right: 30
  },
  divider: {
    margin: "10px 0 0 0"
  }
});

const ShopMenu = ({ drawerOpen, updateDrawerOpen }) => {
  const classes = useStyles();

  const [ásványokOpen, setÁsványokOpen] = useState(false);
  const updateÁsványokOpen = () => setÁsványokOpen(!ásványokOpen);

  const [ékszerekOpen, setÉkszerekOpen] = useState(false);
  const updateÉkszerekOpen = () => setÉkszerekOpen(!ékszerekOpen);

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
        <ListItem button onClick={updateÁsványokOpen}>
          <ListItemText primary="Ásványok" />
          <ListItemIcon>
            <ArrowDropDownRoundedIcon />
          </ListItemIcon>
        </ListItem>

        <Collapse in={ásványokOpen} unmountOnExit>
          <List>
            <ListItem>
              <ListItemText primary="Összes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Csakra Ásványok" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Horoszkóp Ásványok" />
            </ListItem>
          </List>
        </Collapse>
        <Divider className={classes.divider} />
        <ListItem button>
          <ListItemText primary="Dísztárgyak" />
        </ListItem>
        <Divider className={classes.divider} />
        <ListItem button onClick={updateÉkszerekOpen}>
          <ListItemText primary="Ékszerek" />
          <ListItemIcon>
            <ArrowDropDownRoundedIcon />
          </ListItemIcon>
        </ListItem>
        <Collapse in={ékszerekOpen} unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <ListItemText primary="Összes" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fülbevalók" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Gyűrűk" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Karkötők" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Nyakláncok" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Medálok" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ékszercsomagok" />
            </ListItem>
          </List>
        </Collapse>
        <Divider className={classes.divider} />
      </List>
    </Drawer>
  );
};

export default ShopMenu;
