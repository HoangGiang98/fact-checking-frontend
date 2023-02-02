import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import GaugeChart from "react-gauge-chart";
const useStyles = makeStyles({
  chartStyle: {
    height: 255,
  },
});

export default function MatchGauge(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      spacing={1}
      className={classes.paperMarginBottom}
    >
      <Grid item xs={4}>
        <Typography gutterBottom variant="h5" align="center">
          UNMATCHED
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={20}
          colors={["#cf000f", "#f0541e", "#009944"]}
          arcWidth={0.2}
          percent={props.score}
          textColor="#000"
        />
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="h5" align="center">
          MATCHED
        </Typography>
      </Grid>
    </Grid>
  );
}
