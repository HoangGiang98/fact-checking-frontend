import {
  WILL_CHECK_FACT,
  CHECK_FACT_SUCCESS,
  CHECK_FACT_FAILURE,
} from "../actions/factcheckActions";

const initState = {
  checkingResults: [],
  fetchingRepos: false,
  initialData: [],
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
        repos: action.data,
        initialData: action.data,
        fetchingAnswer: false,
      };
    case CHECK_FACT_FAILURE:
      return {
        ...state,
        fetchingAnswer: false,
      };
    default:
      return state;
  }
};

export default factcheckReducer;
