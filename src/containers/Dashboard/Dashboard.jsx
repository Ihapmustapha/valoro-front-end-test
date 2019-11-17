import React from "react";
import useStyles from "./styles";
import Topbar from "../../components/layout/Topbar/Topbar";
import SideDrawer from "../../components/layout/SideDrawer/SideDrawer";

const Dashboard = props => {
  const classes = useStyles();

  return (
    <>
      <Topbar />
      <SideDrawer />
    </>
  );
};

export default Dashboard;
