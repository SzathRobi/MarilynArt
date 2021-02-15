import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'

import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ListAltIcon from '@material-ui/icons/ListAlt';

function AminMenu({updateWhichPanel}) {

  const classes = useStyles()

  const adminMenu = {
    width: 200,
    height: "89.7vh",
    backgroundColor: "#ddd",
    paddingTop: 30,
    position: "relative",
    top: "-0.2rem",
    left: 0,
    zIndex: 10
  }

  return (
    <List style={adminMenu}>
      <ListItem button onClick={() => updateWhichPanel(1)}>
        <ListItemText primary="Statisztikák"/>
        <ListItemIcon>
          <AssessmentRoundedIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => updateWhichPanel(2)}>
        <ListItemText primary="Termékek"/>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => updateWhichPanel(3)}>
        <ListItemText primary="Áru hozzáadása"/>
        <ListItemIcon>
          <AddBoxIcon />
        </ListItemIcon>
      </ListItem>
      <ListItem button onClick={() => updateWhichPanel(4)}>
        <ListItemText primary="Felhasználók"/>
        <ListItemIcon>
          <PeopleAltRoundedIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  )
}

export default AminMenu

const useStyles = makeStyles({
  adminMenu: {
    width: 200,
    height: "100%",
    backgroundColor: "#ddd",
    paddingTop: 30,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10
  }
});
