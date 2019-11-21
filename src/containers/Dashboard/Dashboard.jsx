import React, { useEffect } from "react";
import useStyles from "./styles";
import SideDrawer from "../../components/layout/SideDrawer/SideDrawer";
import TopBar from "../../components/layout/TopBar/TopBar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DashboardItem from "../../components/layout/DashboardItem/DashboardItem";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const Dashboard = ({ fetchDashboard, dashboardData }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(dashboardData);

  return (
    <>
      <TopBar />
      <SideDrawer />
      <Typography className={classes.pageHeadline} variant="h5">
        Dashboard
      </Typography>
      <Grid
        container
        direction="row"
        md={10}
        lg={10}
        className={classes.dashboardElementContainer}
      >
        {dashboardData &&
          dashboardData.map(element => (
            <Grid item key={element.id}>
              <DashboardItem
                name={element.name}
                year={element.year}
                pantoneValue={element.pantone_value}
              />
            </Grid>
          ))}
      </Grid>
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
