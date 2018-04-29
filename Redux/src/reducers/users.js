import { FETCH_PROJECTS_START, FETCH_PROJECTS_ERROR, FETCH_PROJECTS_SUCCESS } from '../constants/actionTypes';
import { LOADING, ERROR, LOADED } from '../constants/states';

const initialState = {
  data: [],
  error: '',
  from: 0,
  limit: 10,
  status: LOADING,
};

// This listens on the action and then updates the state according to the return value
export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
