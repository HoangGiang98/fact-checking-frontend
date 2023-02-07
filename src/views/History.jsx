import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Typography, Divider } from "@material-ui/core";
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
  adjustingSubheadingMargin: {
    marginTop: "2rem",
  },
  dividerMargin: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
});
class History extends Component {
  componentDidMount() {
    this.props.getHistory();
  }

  handleNumber(i) {
    switch (i) {
      case 0:
        return "First Claim";
      case 1:
        return "Second Claim";
      case 2:
        return "Third Claim";
      case 3:
        return "Fourth Claim";
      case 4:
        return "Fifth Claim";
      default:
        return "";
    }
  }

  handleVerificationMethod(verificationMethod) {
    switch (verificationMethod) {
      case "dpr":
        return "Question based verification (Wikipedia Database)";
      case "nli_bing":
        return "Bing";
      case "nli_google":
        return "Google";
      case "nli_wiki":
        return "Fact based verification (Wikipedia Database)";
      default:
        return "";
    }
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
          <div className="div-part">
            {this.props.claimHistory.map((el, i) => {
              return el.verification_method === "dpr" ? (
                <div key={i}>
                  <Grid item xs={12} className={classes.resultsMargin}>
                    <Typography variant="h4" gutterBottom>
                      {this.handleNumber(i) +
                        " - " +
                        this.handleVerificationMethod(el.verification_method)}
                    </Typography>
                  </Grid>
                  <DprResult claim={el.claim} answers={el.answers} />
                  <Divider className={classes.dividerMargin} />
                </div>
              ) : (
                <div key={i}>
                  <Grid item xs={12} className={classes.resultsMargin}>
                    <Typography variant="h4" gutterBottom>
                      {this.handleNumber(i) +
                        " - " +
                        this.handleVerificationMethod(el.verification_method)}
                    </Typography>
                  </Grid>
                  <WebscrapeResult
                    claim={el.claim}
                    verdict={el.verdict}
                    answers={el.answers}
                  />
                  <Divider className={classes.dividerMargin} />
                </div>
              );
            })}
          </div>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    claimHistory: state.factcheck.history.filter(
      (item) => item.answers.length > 0
    ),
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
