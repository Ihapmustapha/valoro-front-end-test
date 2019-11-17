import React from "react";
import useStyles from "./styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import ListIcon from "@material-ui/icons/List";
import DateRangeIcon from "@material-ui/icons/DateRange";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FolderIcon from "@material-ui/icons/Folder";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Avatar } from "@material-ui/core";

const SideDrawer = props => {
  const classes = useStyles();
  const labels = [
    "Dashboard",
    "Forum",
    "Events / Meetings",
    "Knowledge",
    "Approval",
    "Speakers",
    "Directory",
    "Logout"
  ];
  const icons = [
    <AvTimerIcon />,
    <ListIcon />,
    <DateRangeIcon />,
    <PlayArrowIcon />,
    <CheckCircleOutlineIcon />,
    <PeopleAltIcon />,
    <FolderIcon />,
    <ExitToAppIcon />
  ];
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Avatar />
      <Divider />
      <List>
        {labels.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{icons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
