import axios from "axios";

export const WILL_CHECK_FACT = "WILL_CHECK_FACT";
export const CHECK_FACT_SUCCESS = "CHECK_FACT_SUCCESS";
export const CHECK_FACT_FAILURE = "CHECK_FACT_FAILURE";
export const WILL_GET_HISTORY = "WILL_GET_HISTORY";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_HISTORY_FAILURE = "GET_HISTORY_FAILURE";


export const checkFact = (factCheckReqBody) => {
  return (dispatch) => {
    dispatch({
      type: WILL_CHECK_FACT,
    });
    console.log(JSON.stringify(factCheckReqBody));
    axios
      .post(
        "http://localhost:8000/factchecker/verify/",
        JSON.stringify(factCheckReqBody),
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data.answers[0].verdict);
        return dispatch({
          type: CHECK_FACT_SUCCESS,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({
          type: CHECK_FACT_FAILURE,
        });
      });
  };
};

export const checkFactDocument = (fact) => {
  return (dispatch) => {
    dispatch({
      type: WILL_CHECK_FACT,
    });
    axios
      .get("http://localhost:8000/documents/" + fact, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        return dispatch({
          type: CHECK_FACT_SUCCESS,
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        return dispatch({
          type: CHECK_FACT_FAILURE,
          data: error
        });
      });
  };
};