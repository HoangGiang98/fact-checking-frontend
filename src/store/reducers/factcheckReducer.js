import {
  WILL_CHECK_FACT,
  CHECK_FACT_SUCCESS,
  CHECK_FACT_FAILURE,
  WILL_GET_HISTORY,
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILURE
} from "../actions/factcheckActions";

const initState = {
  answers: [],
  fetchingAnswer: false,
  claim:"",
  verificationMethod:"",
  history:[],
  error: [],
  verdict: ""
};

const factcheckReducer = (state = initState, action) => {
  switch (action.type) {
    case WILL_CHECK_FACT:
      return {
        ...state,
        fetchingAnswer: true,
      };
    case CHECK_FACT_SUCCESS:
      console.log('Now: ' + action.data.verdict);
      return {
        ...state,
        answers: action.data.answers,
        claim: action.data.claim,
        verificationMethod: action.data.verification_method,
        verdict: action.data.verdict,
        fetchingAnswer: false,
      };
    case CHECK_FACT_FAILURE:
      return {
        ...state,
        error: action.data,
        fetchingAnswer: false,
      };
    case WILL_GET_HISTORY:
      return {
        ...state,
      };
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.data
      };
    case GET_HISTORY_FAILURE:
      return {
        ...state,
        error: action.data,
      };
    default:
      return state;
  }
};

export default factcheckReducer;
