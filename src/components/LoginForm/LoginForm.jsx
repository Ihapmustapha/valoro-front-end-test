import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Facebook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Google from "../../assets/icons/google.svg";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import * as actions from "../../actions/index";

const LoginForm = ({ classes, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  const handleInput = e => {
    let { name, value } = e.target;
    if (name === "password") setPassword(value);
    if (name === "email") setEmail(value);
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={12}
      md={12}
      className={classes.formContainer}
      direction="column"
      alignItems="flex-start"
      justify="center"
    >
      <Grid item>
        <Typography component="h1" variant="h5" className={classes.loginHeader}>
          Login
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1" className={classes.loginCaption}>
          Don't have an account?{" "}
          <Link href="#" variant="body2">
            {"Create your account,"}
          </Link>{" "}
          it takes less than a minute.
        </Typography>
      </Grid>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleInput}
        />
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handleInput}
        />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          className={classes.rememberMeContainer}
        >
          <Grid item>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>

          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}></Box>
        <Fab
          variant="extended"
          aria-label="like"
          color="primary"
          type="submit"
          size="large"
          className={classes.loginFab}
        >
          Login
        </Fab>
      </form>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        className={classes.socialLoginContainer}
      >
        <Grid item>
          <Typography variant="subtitle1" className={classes.loginCaption}>
            Or login with
          </Typography>
        </Grid>
        <Grid item>
          <Fab variant="extended" aria-label="like" color="primary">
            <img
              src={Facebook}
              alt="facebook-logo"
              className={classes.loginFabIcon}
            />
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" aria-label="like" color="primary">
            <img
              src={Twitter}
              alt="twitter-logo"
              className={classes.loginFabIcon}
            />
          </Fab>
        </Grid>
        <Grid item>
          <Fab variant="extended" aria-label="like" color="primary">
            <img
              src={Google}
              alt="google-plus-logo"
              className={classes.loginFabIcon}
            />
          </Fab>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
