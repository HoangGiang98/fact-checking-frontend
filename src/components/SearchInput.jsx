// imports
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { checkFact,checkFactDocument } from "../store/actions/factcheckActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "28ch",
  },
}));

function SearchInput(props) {
  const [values, setValues] = React.useState({
    fact: "",
  });
  const classes = useStyles();
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose method");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    console.log(values.fact === "");
    event.preventDefault();
    if (values.fact === "") {
      setHelperText("Please enter a fact");
      setError(true);
    } else if (value === "Database") {
      console.log(values.fact);
      setHelperText("You got it!");
      // props.checkFactDocument(values.fact);
      props.checkFact({
        claim: values.fact,
        verification_method: "dpr",
      });
      setError(false);
    } else if (value === "Google") {
      
      props.checkFact({
        claim: values.fact,
        verification_method: "google",
      });
      setError(false);
    } else if (value === "Bing") {
      props.checkFact({
        claim: values.fact,
        verification_method: "bing",
      });
      setError(false);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  return (
    <FormControl fullWidth variant="filled" className={classes.margin}>
      <Grid container direction="row" alignItems="stretch" spacing={1}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Search Fact"
            type="search"
            variant="outlined"
            fullWidth
            value={values.amount}
            onChange={handleChange("fact")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="Database"
              control={<Radio />}
              label="Database"
            />
            <FormControlLabel
              value="Google"
              control={<Radio />}
              label="Google"
            />
            <FormControlLabel
              value="Bing"
              control={<Radio />}
              label="Bing"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
            className={classes.button}
          >
            Check Fact
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  );
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkFact: (factCheckReqBody) => dispatch(checkFact(factCheckReqBody)),
    checkFactDocument: (fact) => dispatch(checkFactDocument(fact)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((withRouter(SearchInput)));
