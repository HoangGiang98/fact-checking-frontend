import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import SearchInput from "../components/SearchInput";
import CircularIndeterminate from "../components/Circularindeterminate";
import DprResult from "../components/DprResult";
import WebscrapeResult from "../components/WebscrapeResult";
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
              {this.props.verificationMethod === "dpr" ? (
                <DprResult
                  claim={this.props.claim}
                  answers={this.props.answers}
                />
              ) : (
                <WebscrapeResult
                  claim={this.props.claim}
                  verdict={this.props.verdict}
                  answers={this.props.answers}
                />
              )}
            </>
          )}
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
    verdict: state.factcheck.verdict
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Home)));