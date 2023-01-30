import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import DprSearchResultCard from "../components/DprSearchResultCard";
const useStyles = makeStyles((theme) => ({
  resultsMargin: {
    marginLeft: "2px",
  },
  cardSize: {
    marginLeft: "6px",
    marginBottom: "5px",
  },
  titleMargin: {
    marginTop: "10px",
    marginBottom: "14px",
  },
}));

export default function DprResult(props) {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={1}
        className={classes.resultsMargin}
      >
        <Grid item xs={12} className={classes.titleMargin}>
          <Typography variant="h4" gutterBottom>
            {props.claim} ?
          </Typography>
        </Grid>
      </Grid>
      {props.answers.map((answer) => (
        <Grid key={answer.title} item xs={12} className={classes.cardSize}>
          <DprSearchResultCard
            factState={answer.verdict}
            factAnswer={answer.content}
            factSource={answer.title}
            score={answer.similarity_dpr / 100}
            factUrl={answer.url}
          />
        </Grid>
      ))}
    </>
  );
}
