import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const DashboardItem = ({ name, pantoneValue, year }) => {
  const classes = useStyles();
  return (
    <div className={classes.itemMainContainer}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        className={classes.itemSubContainer}
      >
        <Grid item>
          <Typography className={classes.itemText}>{name}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.itemText}>{pantoneValue}</Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.itemText}>{year}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardItem;
