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
        return dispatch({
          type: GET_HISTORY_SUCCESS,
          data: response.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: CHECK_FACT_FAILURE,
          data: error
        });
      });
  };
};

export const getHistory = (fact) => {
  return (dispatch) => {
    dispatch({
      type: WILL_GET_HISTORY,
    });
    axios
      .get("http://localhost:8000/factchecker/history/", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        return dispatch({
          type: GET_HISTORY_SUCCESS,
          data: response.data,
        });
      })
      .catch((error) => {
        return dispatch({
          type: GET_HISTORY_FAILURE,
          data: error,
        });
      });
  };
};