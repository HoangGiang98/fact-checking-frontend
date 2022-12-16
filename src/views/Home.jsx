import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { checkFact } from "../store/actions/factcheckActions";
import SearchInput from "../components/SearchInput";

const styles = (theme) => ({
  mainContainer: {
    backgroundColor: "#6540ff",
    flexGrow: 1,
  },
});
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
                    <div className="link">
                      <a href="#google-api">
                        <img src="./images/binoculars.png" alt="" />
                        <h2>Google API</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="search-and-more">
                      <SearchInput />
                </div>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkFact: () => dispatch(checkFact()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Home)));
