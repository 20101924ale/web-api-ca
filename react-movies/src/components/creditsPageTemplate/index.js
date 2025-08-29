import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";

function CreditsPageTemplate({ creditsComponent, title }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid container sx={{ flex: "1 1 500px", padding: "20px" }}>
        <Grid item xs={12}>
          {creditsComponent}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CreditsPageTemplate;
