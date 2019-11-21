import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  itemMainContainer: {
    width: "150px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "100px",
    border: "white",
    borderWidth: "thick",
    boxShadow: "4px 7px 15px -3px rgba(0,0,0,0.19)",
    marginTop: "30px",
    marginRight: "20px"
  },
  itemSubContainer: {
    position: "relative",
    top: "5px",
    left: "5px",
    width: "140px",
    height: "140px",
    borderRadius: "100px",
    background:
      "linear-gradient(180deg, rgba(29,210,138,1) 35%, rgba(0,212,255,1) 100%);"
  },
  itemText: {
    color: "white",
    fontWeight: "600"
  }
}));

export default useStyles;
