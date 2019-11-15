import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      component="main"
      className={classes.root}
      direction="column"
      justify="center"
      alignItems="center"
    >
      {/* Login Form */}
      <Grid
        container
        className={classes.loginCardContainer}
        item
        xs={8}
        sm={8}
        md={8}
        component={Paper}
        elevation={6}
        square
      >
        <Grid item xs={12} sm={12} md={6}>
          <LoginForm classes={classes} />
        </Grid>
        <Grid container item direction="column" xs={false} sm={false} md={6}>
          <Grid item md={12} className={classes.cardImage}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.imageCaptionContainer}
            >
              <Grid item>
                <Typography className={classes.imageWelcome}>
                  Welcome
                </Typography>
              </Grid>
              <Grid item>
                <div className={classes.separator}></div>
              </Grid>

              <Grid item>
                <Typography className={classes.imageParagraph}>
                  {`Sed do eiusmod temporut laboure et dolore magna eliqua. Your perfect place to buy & sell`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
