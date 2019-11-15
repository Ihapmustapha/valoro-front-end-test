import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#edecec"
  },
  loginCardContainer: {
    minHeight: "500px"
  },
  formContainer: {
    padding: "50px 50px 50px 50px"
  },
  loginCard: {
    marginTop: "120px"
  },
  loginHeader: {
    fontSize: "30px",
    fontWeight: "600"
  },
  loginCaption: {
    marginTop: "10px",
    color: "#0000005e"
  },
  rememberMeContainer: {
    marginTop: "15px"
  },
  socialLoginContainer: {
    marginTop: "15px"
  },
  loginFab: {
    marginTop: "-15px"
  },
  loginFabIcon: {
    width: "15px",
    height: "15px"
  },
  cardImage: {
    backgroundImage: "url(https://source.unsplash.com/npxXWgQ33ZQ/1600x900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%"
  }
}));

export default useStyles;
