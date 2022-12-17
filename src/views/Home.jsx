import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Paper, Grid, Typography } from "@material-ui/core";
import SearchInput from "../components/SearchInput";
import SearchResultCard from "../components/SearchResultCard";
import CircularIndeterminate from "../components/Circularindeterminate"

const styles = (theme) => ({
  mainContainer: {
    backgroundColor: "#6540ff",
    flexGrow: 1,
  },
  resultsMargin: {
    marginRight: "5rem",
    marginLeft: "5rem",
  },
  paperMarginBottom: {
    marginBottom: "1rem",
  },
  bufferingCircle: {
    justifyContent:"center"
  },
});
const factState = true;
class Home extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Paper>
          <div className="App">
            <main>
              <section className="glass">
                <div className="dashboard">
                  <div className="app-name">
                    <img src="./images/fact-check.png" alt="" />
                    <h1>Fact-Checking Tool</h1>
                    <p>Verify claims to see how true they are</p>
                  </div>
                  <div className="links">
                    <div className="link">
                      <a href="#workings">
                        <img src="./images/workings.png" alt="" />
                        <h2>How It Works</h2>
                      </a>
                    </div>

                    <div className="link">
                      <a href="#past">
                        <img src="./images/time.png" alt="" />
                        <h2>Past Claims</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <Grid
                  container
                  direction="row"
                  alignItems="stretch"
                  spacing={1}
                  className={classes.paperMarginBottom}
                >
                  <Grid item xs={12}>
                    <div className="search-and-more">
                      <SearchInput />
                    </div>
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
                      key={JSON.parse(answer).content}
                      item
                      xs={12}
                      className={classes.resultsMargin}
                    >
                      <SearchResultCard
                        factState={factState}
                        factInput={this.props.claim}
                        factAnswer={JSON.parse(answer).content}
                        factSource={JSON.parse(answer).name}
                      />
                    </Grid>
                  ))}
                </Grid>
              </section>
            </main>
            <div className="circle1"></div>
            <div className="circle2"></div>
          </div>
        </Paper>
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
