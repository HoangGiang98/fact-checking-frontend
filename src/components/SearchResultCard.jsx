import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import TripleGauge from "./TripleGauge";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardSize: {
    maxHeight: "100px",
    height:"100px",
    overflowY: "auto",
  },
});

export default function SearchResultCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <TripleGauge
          supportedScore={props.supportedScore}
          refutedScore={props.refutedScore}
          neiScore={props.neiScore}
        ></TripleGauge>
        <Typography
          variant="body2"
          component="p"
          gutterBottom
          className={classes.cardSize}
        >
          ...{props.factAnswer}...
        </Typography>
        <Typography variant="h5" component="h2">
          <Link href={props.factUrl + ""} underline="hover">
            Source: {props.factSource}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
