import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./styles";

const NotFound = props => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.mainContainer}
      >
        <Grid item>
          <Typography variant="h1">404</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h1">Not Found</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default NotFound;
