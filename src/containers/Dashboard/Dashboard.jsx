import React, { useEffect } from "react";
import useStyles from "./styles";
import Topbar from "../../components/layout/Topbar/Topbar";
import SideDrawer from "../../components/layout/SideDrawer/SideDrawer";
import DashboardItem from "../../components/layout/DashboardItem/DashboardItem";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const Dashboard = ({ fetchDashboard, dashboardData }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchDashboard();
  }, []);

  console.log(dashboardData);

  return (
    <>
      <Topbar />
      <SideDrawer />
      <div className={classes.dashboardElementContainer}>
        {dashboardData &&
          dashboardData.map(elementData => (
            <DashboardItem key={elementData.id} elementData={elementData} />
          ))}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  dashboardData:
    state.dashboardReducer &&
    state.dashboardReducer.dashboardData &&
    state.dashboardReducer.dashboardData &&
    state.dashboardReducer.dashboardData.data &&
    state.dashboardReducer.dashboardData.data.data
});

const mapDispatchToProps = dispatch => ({
  fetchDashboard: () => dispatch(actions.fetchDashboard())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
