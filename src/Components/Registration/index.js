import React from "react";
import { Grid } from "@material-ui/core";

const Registration = () => {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={2}>
          This is for flyer
        </Grid>

        <Grid item xs={9}>
          This is for content
        </Grid>
        <Grid item xs={1}>
          This is for flyer
        </Grid>
      </Grid>
    </Grid>
  );
};

//export default (props) => <div>Place the registration page here !</div>;
export default Registration;
