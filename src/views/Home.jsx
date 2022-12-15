import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Paper, Grid } from "@material-ui/core";



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
         <div className='App'>
        <main>
          <section className='glass'>
            <div className='dashboard'>
              <div className='app-name'>
                <img src='./images/fact-check.png' alt='' />
                <h1>Fact-Checking Tool</h1>
                <p>Verify claims to see how true they are</p>
              </div>
              <div className='links'>
                <div className='link'>
                  <a href='#workings'>
                    <img src='./images/workings.png' alt='' />
                    <h2>How It Works</h2>
                  </a>
                </div>

                <div className='link'>
                  <a href='#past'>
                    <img src='./images/time.png' alt='' />
                    <h2>Past Claims</h2>
                  </a>
                </div>
                <div className='link'>
                  <a href='#google-api'>
                    <img src='./images/binoculars.png' alt='' />
                    <h2>Google API</h2>
                  </a>
                </div>
              </div>
            </div>
            <div className='search-and-more'>
              <div className='claim-search'>
                <input className='searchInput' type='text' placeholder='Enter a claim..' />
                <i id='filtersubmit' className='fa fa-search'></i>
              </div>
              <div className="search-type">
                  <input className="radio__input" type="radio"  name="search-method" value="elastic" id="elastic" checked/>
                  <label className="radio__label" htmlFor="elastic">Elasticsearch</label>
                  <input className="radio__input" type="radio" name="search-method" value="scraper" id="scraper"/>
                  <label className="radio__label" htmlFor="scraper">Web scraper</label>
              </div>
            </div>
          </section>
        </main>
        <div className='circle1'></div>
        <div className='circle2'></div>
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(withRouter(Home)));
