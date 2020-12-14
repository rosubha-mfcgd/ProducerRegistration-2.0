import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { ReactComponent as FooterLogo } from "./Images/footer-logo.svg";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "215px",
    background: "#2F3242",
    marginTop: "100px"
  },
  labelStyles: {
    fontWeight: "normal",
    fontFamily: '"Manulife JH Sans","Helvetica","Arial",sans-serif',
    fontSize: "15px",
    display: "block",
    color: "#FFFFFF",
    lineHeight: "24px",
    opacity: "0.8"
  },
  containerStyles: {
    paddingTop: "50px"
  },
  gridSeparation: {
    paddingBottom: "25px"
  },
  linkStyles: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "14px",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  logoStyles: {
    padding: "50px"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={3} className={classes.logoStyles}>
          <FooterLogo />
        </Grid>
        <Grid item xs={9}>
          <Grid container className={classes.containerStyles}>
            <Grid item xs={12} className={classes.gridSeparation}>
              <span className={classes.labelStyles}>
                <a
                  className={classes.linkStyles}
                  rel="noopener noreferrer"
                  href="http://www.johnhancock.com/accessibility.html"
                  target="_blank"
                >
                  Accessibility
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  className={classes.linkStyles}
                  rel="noopener noreferrer"
                  href="http://www.johnhancock.com/privacysecurity.html"
                  target="_blank"
                >
                  Privacy &amp; Security
                </a>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <a
                  className={classes.linkStyles}
                  rel="noopener noreferrer"
                  href="http://www.johnhancock.com/legal.html"
                  target="_blank"
                >
                  Legal
                </a>
              </span>
            </Grid>
            <Grid item xs={12}>
              <label className={classes.labelStyles}>
                If you need assistance registering or already have an online
                account with John Hancock,<br></br>please call 888-888-8856,
                Monday - Friday 8:30AM - 4:30PM EST.
              </label>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
