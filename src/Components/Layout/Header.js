import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ReactComponent as Logo } from "./Images/logo.svg";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%"
  },
  gridSeperation: {
    paddingBottom: "25px"
  },
  logoSeparation: {
    paddingTop: "30px",
    paddingBottom: "80px"
  }
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.logoSeparation}>
          <Logo />
        </Grid>
      </Grid>
    </div>
  );
};
export default Header;
