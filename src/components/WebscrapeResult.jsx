import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown"; 
import SearchResultCard from "../components/SearchResultCard";
const useStyles = makeStyles((theme) => ({
  resultsMargin: {
    marginLeft: "2px",
  },
  cardSize: {
    marginLeft: "6px",
    marginBottom: "5px",
  },
  greenColor: {
    color: "#009944",
  },
  redColor: {
    color: "#cf000f",
  },
  orangeColor: {
    color: "#f0541e",
  }
}));

export default function WebscrapeResult(props) {
  const classes = useStyles();

  const handleEmojie = (text) => {
    switch (text) {
      case "Supported":
        return <ThumbUpIcon style={{ color: "#009944", fontSize: "40px" }} />;
      case "Refuted":
        return (
          <ThumbDownIcon
            fontSize="inherit"
            style={{ color: "#cf000f", fontSize: "40px" }}
          />
        );
      case "Not Enough Info":
        return (
          <ThumbsUpDownIcon
            fontSize="inherit"
            style={{ color: "#f0541e", fontSize: "40px" }}
          />
        );
      default:
        return "";
    }
  };

  const handleVerdict = (text, classes) => {
    switch (text) {
      case "Supported":
        return (
          <Typography
            variant="h4"
            align="center"
            className={classes.greenColor}
          >
            SUPPORTED
          </Typography>
        );
      case "Refuted":
        return (
          <Typography variant="h4" align="center" className={classes.redColor}>
            REFUTED
          </Typography>
        );
      case "Not Enough Info":
        return (
          <Typography
            variant="h4"
            align="center"
            className={classes.orangeColor}
          >
            Not Enough Info
          </Typography>
        );
      default:
        return "";
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={1}
        className={classes.resultsMargin}
      >
        <Grid item xs={9}>
          <Typography variant="h4">{props.claim} ?</Typography>
        </Grid>
        <Grid item xs={3}>
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              {handleEmojie(props.verdict)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {handleVerdict(props.verdict, classes)}
          </Grid>
        </Grid>
      </Grid>
      {props.answers.map((answer) => (
        <Grid key={answer.title} item xs={12} className={classes.cardSize}>
          <SearchResultCard
            factInput={props.claim}
            factAnswer={answer.content}
            factSource={answer.title}
            supportedScore={answer.supported_nli / 100}
            refutedScore={answer.refuted_nli / 100}
            neiScore={answer.not_enough_info_nli / 100}
            factUrl={answer.url}
          />
        </Grid>
      ))}
    </>
  );
}
