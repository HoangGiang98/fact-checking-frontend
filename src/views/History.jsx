import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import SearchResultCard from "../components/SearchResultCard";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbsUpDownIcon from "@material-ui/icons/ThumbsUpDown";
import { getHistory } from "../store/actions/factcheckActions";
import DprSearchResultCard from "../components/DprSearchResultCard";

const first_answer = {
  claim: "Is Germany in EU",
  verification_method: "dpr",
  datetime: "2022-12-18T19:44:03.939432Z",
  veridict: "Supported",
  answers: [
    {
      title: "American Association (1902–1997)",
      content:
        "ular season's Triple-A Alliance and Triple-A All-Star Game.\nThe American Association was formed in the fall of 1901 by Thomas J. Hickey, who had recently been appointed president of the Western League and was a founder of the National Association of Professional Baseball Leagues. Hickey resigned from the Western League to lead the new American Association, which elected not to join the National Association, thus becoming an \"outlaw\" league. The eight-team circuit fielded clubs in Columbus, Ohio; Indianapolis, Indiana; Kansas City, Missouri; Louisville, Kentucky; Milwaukee, Wisconsin; Minneapolis, Minnesota; Saint Paul, Minnesota; and Toledo, Ohio. The league's inaugural 140-game schedule was to be played from late April to late September 1902. At the end of that season, the first American Association championship was won by the Indianapolis Indians.\nThe American Association became members of the National Association after two seasons and was then classified as a Class A circuit. In 1912, it was reclassified as a Double-A league. Through the first 12 years of play, the AA established itself as one of the premier minor leagues in the country. Its teams, featuring former major league players and top minor leaguers, were both competitive and profitable.\nIn 1914, the newly-formed Federal League placed teams in Indianapolis and Kansas City as well as other locals near American Association teams. One of only a few franchise shifts in the first incarnation of the AA occurred in 1914 ",
      verdict: "Uncertain",
      summary: "ular season's Triple-A Alliance and Triple-A All-Star Game.",
      score: { Supported: 100, "Not Enough Info": 0.0, Refuted: 0.0 },
    },
    {
      title: "Australian Active Service Medal",
      content:
        "The Australian Active Service Medal (AASM) is an Australian military decoration. It was authorised on 13 September 1988 to recognise prescribed service in \"warlike\" operations, backdated to February 1975. It is awarded with a clasp to denote the prescribed operation and subsequent awards of the medal are made in the form of additional clasps. In 2012, it was announced that the medal would no longer be issued for future operations, with the AASM and the Australian Service Medal being replaced by the Australian Operational Service Medal.\nThe AASM is a circular nickel-silver medal ensigned with the Crown of St Edward. The obverse has a Federation Star within a wreath of mimosa and bears a laurel wreath surrounding the inscription 'FOR ACTIVE SERVICE'.\nThe medal ribbon is 32 millimetres wide and has a central red stripe to symbolise the danger of warlike operations. It is flanked by stripes of silver-green which in turn are flanked by stripes of light green, gold, dark green and brown.\nVeterans and current serving ADF personnel have proposed that a new AASM be issued incorporating clasps for warlike operations in Afghanistan, Syria and Iraq. In 2015, the AASM ceased being issued by the Australian Government and was replaced by the Operational Service medal (OSM). Unlike the AASM, the OSM for Middle East deployments does not distinguish between the active and warlike service of deployed personnel serving in Afghanistan, Iraq and Syria, compared with support personnel serving in pl",
      verdict: "Uncertain",
      summary:
        "The Australian Active Service Medal (AASM) is an Australian military decoration.",
      score: { Supported: 70, "Not Enough Info": 20, Refuted: 10 },
    },
  ],
};

const second_answer = {
  claim: "Is USA in the EU",
  verification_method: "dpr",
  datetime: "2022-12-18T19:44:03.939432Z",
  veridict: "Refuted",
  answers: [
    {
      title: "American Association (1902–1997)",
      content:
        "ular season's Triple-A Alliance and Triple-A All-Star Game.\nThe American Association was formed in the fall of 1901 by Thomas J. Hickey, who had recently been appointed president of the Western League and was a founder of the National Association of Professional Baseball Leagues. Hickey resigned from the Western League to lead the new American Association, which elected not to join the National Association, thus becoming an \"outlaw\" league. The eight-team circuit fielded clubs in Columbus, Ohio; Indianapolis, Indiana; Kansas City, Missouri; Louisville, Kentucky; Milwaukee, Wisconsin; Minneapolis, Minnesota; Saint Paul, Minnesota; and Toledo, Ohio. The league's inaugural 140-game schedule was to be played from late April to late September 1902. At the end of that season, the first American Association championship was won by the Indianapolis Indians.\nThe American Association became members of the National Association after two seasons and was then classified as a Class A circuit. In 1912, it was reclassified as a Double-A league. Through the first 12 years of play, the AA established itself as one of the premier minor leagues in the country. Its teams, featuring former major league players and top minor leaguers, were both competitive and profitable.\nIn 1914, the newly-formed Federal League placed teams in Indianapolis and Kansas City as well as other locals near American Association teams. One of only a few franchise shifts in the first incarnation of the AA occurred in 1914 ",
      verdict: "True",
      summary: "ular season's Triple-A Alliance and Triple-A All-Star Game.",
      score: { Supported: 20, "Not Enough Info": 10, Refuted: 70 },
    },
    {
      title: "Australian Active Service Medal",
      content:
        "The Australian Active Service Medal (AASM) is an Australian military decoration. It was authorised on 13 September 1988 to recognise prescribed service in \"warlike\" operations, backdated to February 1975. It is awarded with a clasp to denote the prescribed operation and subsequent awards of the medal are made in the form of additional clasps. In 2012, it was announced that the medal would no longer be issued for future operations, with the AASM and the Australian Service Medal being replaced by the Australian Operational Service Medal.\nThe AASM is a circular nickel-silver medal ensigned with the Crown of St Edward. The obverse has a Federation Star within a wreath of mimosa and bears a laurel wreath surrounding the inscription 'FOR ACTIVE SERVICE'.\nThe medal ribbon is 32 millimetres wide and has a central red stripe to symbolise the danger of warlike operations. It is flanked by stripes of silver-green which in turn are flanked by stripes of light green, gold, dark green and brown.\nVeterans and current serving ADF personnel have proposed that a new AASM be issued incorporating clasps for warlike operations in Afghanistan, Syria and Iraq. In 2015, the AASM ceased being issued by the Australian Government and was replaced by the Operational Service medal (OSM). Unlike the AASM, the OSM for Middle East deployments does not distinguish between the active and warlike service of deployed personnel serving in Afghanistan, Iraq and Syria, compared with support personnel serving in pl",
      verdict: "True",
      summary:
        "The Australian Active Service Medal (AASM) is an Australian military decoration.",
      score: { Supported: 10, "Not Enough Info": 10, Refuted: 80 },
    },
  ],
};

const third_answer = {
  claim: "IS Coffee harmful to human",
  verification_method: "dpr",
  datetime: "2022-12-18T19:44:03.939432Z",
  veridict: "Not Enough Info",
  answers: [
    {
      title: "American Association (1902–1997)",
      content:
        "ular season's Triple-A Alliance and Triple-A All-Star Game.\nThe American Association was formed in the fall of 1901 by Thomas J. Hickey, who had recently been appointed president of the Western League and was a founder of the National Association of Professional Baseball Leagues. Hickey resigned from the Western League to lead the new American Association, which elected not to join the National Association, thus becoming an \"outlaw\" league. The eight-team circuit fielded clubs in Columbus, Ohio; Indianapolis, Indiana; Kansas City, Missouri; Louisville, Kentucky; Milwaukee, Wisconsin; Minneapolis, Minnesota; Saint Paul, Minnesota; and Toledo, Ohio. The league's inaugural 140-game schedule was to be played from late April to late September 1902. At the end of that season, the first American Association championship was won by the Indianapolis Indians.\nThe American Association became members of the National Association after two seasons and was then classified as a Class A circuit. In 1912, it was reclassified as a Double-A league. Through the first 12 years of play, the AA established itself as one of the premier minor leagues in the country. Its teams, featuring former major league players and top minor leaguers, were both competitive and profitable.\nIn 1914, the newly-formed Federal League placed teams in Indianapolis and Kansas City as well as other locals near American Association teams. One of only a few franchise shifts in the first incarnation of the AA occurred in 1914 ",
      verdict: "False",
      summary: "ular season's Triple-A Alliance and Triple-A All-Star Game.",
      score: { Supported: 10, "Not Enough Info": 70, Refuted: 20 },
    },
    {
      title: "Australian Active Service Medal",
      content:
        "The Australian Active Service Medal (AASM) is an Australian military decoration. It was authorised on 13 September 1988 to recognise prescribed service in \"warlike\" operations, backdated to February 1975. It is awarded with a clasp to denote the prescribed operation and subsequent awards of the medal are made in the form of additional clasps. In 2012, it was announced that the medal would no longer be issued for future operations, with the AASM and the Australian Service Medal being replaced by the Australian Operational Service Medal.\nThe AASM is a circular nickel-silver medal ensigned with the Crown of St Edward. The obverse has a Federation Star within a wreath of mimosa and bears a laurel wreath surrounding the inscription 'FOR ACTIVE SERVICE'.\nThe medal ribbon is 32 millimetres wide and has a central red stripe to symbolise the danger of warlike operations. It is flanked by stripes of silver-green which in turn are flanked by stripes of light green, gold, dark green and brown.\nVeterans and current serving ADF personnel have proposed that a new AASM be issued incorporating clasps for warlike operations in Afghanistan, Syria and Iraq. In 2015, the AASM ceased being issued by the Australian Government and was replaced by the Operational Service medal (OSM). Unlike the AASM, the OSM for Middle East deployments does not distinguish between the active and warlike service of deployed personnel serving in Afghanistan, Iraq and Syria, compared with support personnel serving in pl",
      verdict: "False",
      summary:
        "The Australian Active Service Medal (AASM) is an Australian military decoration.",
      score: { Supported: 20, "Not Enough Info": 65, Refuted: 15 },
    },
  ],
};

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
  bufferingCircle: {
    justifyContent: "center",
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
  },
});
class History extends Component {
  componentDidMount() {
    this.props.getHistory();
  }

  handleEmojie = (text) => {
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

  handleVerdict = (text, classes) => {
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
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.resultsMargin}
              >
                <Grid item xs={9}>
                  <Typography variant="h4">
                    {this.props.claimHistory[0].claim} ?
                    {/* {this.handleEmojie(first_answer.veridict)} */}
                  </Typography>
                </Grid>
              </Grid>
              {this.props.claimHistory[0].answers.map((answer) => (
                <Grid
                  key={answer.title}
                  item
                  xs={12}
                  className={classes.cardSize}
                >
                  <DprSearchResultCard
                    factState={answer.verdict}
                    factAnswer={answer.content}
                    factSource={answer.title}
                    score={60 / 100}
                  />
                </Grid>
              ))}
              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography variant="h4" gutterBottom>
                  Second Claim
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.resultsMargin}
              >
                <Grid item xs={9}>
                  <Typography variant="h4">
                    {second_answer.claim} ?
                    {/* {this.handleEmojie(first_answer.veridict)} */}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                      {this.handleEmojie(second_answer.veridict)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {this.handleVerdict(second_answer.veridict, classes)}
                  </Grid>
                </Grid>
              </Grid>
              {second_answer.answers.map((answer) => (
                <Grid
                  key={answer.title}
                  item
                  xs={12}
                  className={classes.cardSize}
                >
                  <SearchResultCard
                    factState={answer.verdict}
                    factInput={second_answer.claim}
                    factAnswer={answer.content}
                    factSource={answer.title}
                    factSummary={answer.summary}
                    supportedScore={answer.score.Supported / 100}
                    refutedScore={answer.score.Refuted / 100}
                    neiScore={answer.score["Not Enough Info"] / 100}
                  />
                </Grid>
              ))}
              <Grid item xs={12} className={classes.resultsMargin}>
                <Typography gutterBottom variant="h4">
                  Third Claim
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={1}
                className={classes.resultsMargin}
              >
                <Grid item xs={9}>
                  <Typography variant="h4">{third_answer.claim} ?</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                      {this.handleEmojie(third_answer.veridict)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {this.handleVerdict(third_answer.veridict, classes)}
                  </Grid>
                </Grid>
              </Grid>
              {third_answer.answers.map((answer) => (
                <Grid
                  key={answer.title}
                  item
                  xs={12}
                  className={classes.cardSize}
                >
                  <SearchResultCard
                    factState={answer.verdict}
                    factInput={second_answer.claim}
                    factAnswer={answer.content}
                    factSource={answer.title}
                    factSummary={answer.summary}
                    supportedScore={answer.score.Supported / 100}
                    refutedScore={answer.score.Refuted / 100}
                    neiScore={answer.score["Not Enough Info"] / 100}
                  />
                </Grid>
              ))}
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
