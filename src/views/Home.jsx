import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import SearchInput from "../components/SearchInput";
import SearchResultCard from "../components/SearchResultCard";
import CircularIndeterminate from "../components/Circularindeterminate";
import Dashboard from "../components/Dashboard";

const styles = (theme) => ({
  mainContainer: {
    backgroundColor: "#6540ff",
    flexGrow: 1,
  },
  resultsMargin: {
    marginLeft:"6px",
    
  },
  paperMarginBottom: {
    marginBottom: "1rem",
  },
  bufferingCircle: {
    justifyContent: "center",
  },
});
class Home extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className="search-and-more">
        <Grid
          container
          direction="row"
          alignItems="stretch"
          spacing={1}
          className={classes.paperMarginBottom}
        >
          <Grid item xs={12}>
            <SearchInput />
          </Grid>
          {this.props.fetchingAnswer && (
            <>
              <Grid item xs={12} className={classes.bufferingCircle}>
                <CircularIndeterminate />
              </Grid>
            </>
          )}
          {this.props.answers.length > 0 && (
            <>
              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography gutterBottom>Results</Typography>
              </Grid>
            </>
          )}
          {this.props.answers.map((answer) => (
            <Grid
              key={answer.title}
              item
              xs={12}
              className={classes.resultsMargin}
            >
              <SearchResultCard
                factState={answer.verdict}
                factInput={this.props.claim}
                factAnswer={answer.content}
                factSource={answer.title}
                factScore={answer.score}
                factSummary={answer.summary}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    answers: state.factcheck.answers,
    claim: state.factcheck.claim,
    fetchingAnswer: state.factcheck.fetchingAnswer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Home)));
