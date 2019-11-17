import React from "react";
import useStyles from "./styles";

const Dashboard = props => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>hello from dashboard</div>;
    </>
  );
};

export default Dashboard;
