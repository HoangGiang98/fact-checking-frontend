import axios from "axios";

export const WILL_CHECK_FACT = "WILL_CHECK_FACT";
export const CHECK_FACT_SUCCESS = "CHECK_FACT_SUCCESS";
export const CHECK_FACT_FAILURE = "CHECK_FACT_FAILURE";


export const checkFact = () => {
  return (dispatch) => {
    dispatch({
      type: WILL_CHECK_FACT,
    });
    axios
      .post("http://localhost:8000/factchecker/verify/", {
        claim: "aa",
        "verification-strategy": "dpr/scraping",
      })
      .then((response) => {
        return dispatch({
          type: CHECK_FACT_SUCCESS,
          data: response.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: CHECK_FACT_FAILURE,
        });
      });
  };
};