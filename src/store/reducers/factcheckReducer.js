import {
  WILL_CHECK_FACT,
  CHECK_FACT_SUCCESS,
  CHECK_FACT_FAILURE,
} from "../actions/factcheckActions";

const initState = {
  answers: [],
  fetchingAnswer: false,
  claim:"",
  error: [],
};

const factcheckReducer = (state = initState, action) => {
  switch (action.type) {
    case WILL_CHECK_FACT:
      return {
        ...state,
        fetchingAnswer: true,
      };
    case CHECK_FACT_SUCCESS:
      return {
        ...state,
        answers: action.data.answers,
        claim: action.data.claim,
        fetchingAnswer: false,
      };
    case CHECK_FACT_FAILURE:
      return {
        ...state,
        error:action.data,
        fetchingAnswer: false,
      };
    default:
      return state;
  }
};

export default factcheckReducer;
