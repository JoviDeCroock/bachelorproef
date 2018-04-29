import { FETCH_USERS, FETCH_USER_ERROR, FETCH_USERS_SUCCESS } from '../constants/actionTypes';
import { LOADING, ERROR, LOADED } from '../constants/states';

const initialState = {
  data: [],
  error: '',
  from: 0,
  limit: 10,
  searchString: '',
  selectedUser: {},
  status: LOADING,
  totalCount: 0,
};

// This listens on the action and then updates the state according to the return value
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      return {
        ...state,
        status: LOADING,
      };
    }
    case FETCH_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        data: [],
        error,
        status: ERROR,
      };
    }
    case FETCH_USERS_SUCCESS: {
      const { data, totalCount } = action;
      return {
        ...state,
        data,
        from: state.from + state.limit,
        status: LOADED,
        totalCount,
      };
    }
    default: {
      return state;
    }
  }
};
