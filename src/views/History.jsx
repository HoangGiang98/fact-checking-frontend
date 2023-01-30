import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import { getHistory } from "../store/actions/factcheckActions";
import DprResult from "../components/DprResult";
import WebscrapeResult from "../components/WebscrapeResult";


const styles = (theme) => ({
  mainContainer: {
    backgroundColor: "#6540ff",
    flexGrow: 1,
  },
  resultsMargin: {
    marginLeft: "6px",
  },
  paperMarginBottom: {
    marginBottom: "1rem",
  },
  adjustingSubheadingMargin:{
    marginTop:"2rem"
  }
});
class History extends Component {
  componentDidMount() {
    this.props.getHistory();
  }
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
          <Grid item xs={12} className={classes.resultsMargin}>
            <Typography gutterBottom variant="h2" align="center">
              History
            </Typography>
          </Grid>
          {this.props.claimHistory.length > 0 ? (
            <div className="div-part">
              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography variant="h4" gutterBottom>
                  First Claim
                </Typography>
              </Grid>
              {this.props.claimHistory.length >= 1 && this.props.claimHistory[0].verification_method === "dpr" ? (
                <DprResult
                  claim={this.props.claimHistory[0].claim}
                  answers={this.props.claimHistory[0].answers}
                />
              ) : (
                <WebscrapeResult
                  claim={this.props.claimHistory[0].claim}
                  verdict={this.props.claimHistory[0].verdict}
                  answers={this.props.claimHistory[0].answers}
                />
              )}
              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.adjustingSubheadingMargin}
                >
                  Second Claim
                </Typography>
              </Grid>
              {this.props.claimHistory.length >= 2 && this.props.claimHistory[1].verification_method === "dpr" ? (
                <DprResult
                  claim={this.props.claimHistory[1].claim}
                  answers={this.props.claimHistory[1].answers}
                />
              ) : (
                <WebscrapeResult
                  claim={this.props.claimHistory[1].claim}
                  verdict={this.props.claimHistory[1].verdict}
                  answers={this.props.claimHistory[1].answers}
                />
              )}

              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.adjustingSubheadingMargin}
                >
                  Third Claim
                </Typography>
              </Grid>
              {this.props.claimHistory.length >= 3 && this.props.claimHistory[2].verification_method === "dpr" ? (
                <DprResult
                  claim={this.props.claimHistory[2].claim}
                  answers={this.props.claimHistory[2].answers}
                />
              ) : (
                <WebscrapeResult
                  claim={this.props.claimHistory[2].claim}
                  verdict={this.props.claimHistory[2].verdict}
                  answers={this.props.claimHistory[2].answers}
                />
              )}
              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.adjustingSubheadingMargin}
                >
                  Fourth Claim
                </Typography>
              </Grid>
              {this.props.claimHistory.length >= 4 && this.props.claimHistory[3].verification_method === "dpr" ? (
                <DprResult
                  claim={this.props.claimHistory[3].claim}
                  answers={this.props.claimHistory[3].answers}
                />
              ) : (
                <WebscrapeResult
                  claim={this.props.claimHistory[3].claim}
                  verdict={this.props.claimHistory[3].verdict}
                  answers={this.props.claimHistory[3].answers}
                />
              )}

              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography
                  variant="h4"
                  gutterBottom
                  className={classes.adjustingSubheadingMargin}
                >
                  Fifth Claim
                </Typography>
              </Grid>
              {this.props.claimHistory.length >= 5 && this.props.claimHistory[4].verification_method === "dpr" ? (
                <DprResult
                  claim={this.props.claimHistory[4].claim}
                  answers={this.props.claimHistory[4].answers}
                />
              ) : (
                <WebscrapeResult
                  claim={this.props.claimHistory[4].claim}
                  verdict={this.props.claimHistory[4].verdict}
                  answers={this.props.claimHistory[4].answers}
                />
              )}
            </div>
          ) : (
            ""
          )}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    claimHistory: state.factcheck.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: () => dispatch(getHistory()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(History)));
