import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import GaugeChart from "react-gauge-chart";
const useStyles = makeStyles({
  chartStyle: {
    height: 255,
  },
});

export default function Gauge(props) {
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
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={20}
          colors={["#FF0000", "#FF5F6D", "#00FF00"]}
          arcWidth={0.2}
          percent={props.score}
          textColor="#000"
        />
      </Grid>
      <Grid item xs={4}>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={20}
          colors={["#FF0000", "#FF5F6D", "#00FF00"]}
          arcWidth={0.2}
          percent={props.score}
          textColor="#000"
        />
      </Grid>
      <Grid item xs={4}>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={20}
          colors={["#FF0000", "#FF5F6D", "#00FF00"]}
          arcWidth={0.2}
          percent={props.score}
          textColor="#000"
        />
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="h5" align="center">
          Supported
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="h5" align="center">
          Refuted
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="h5" align="center">
          Not Enough Info
        </Typography>
      </Grid>
    </Grid>
  );
}
