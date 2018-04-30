import { FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, FETCH_USER, FETCH_USER_ERROR, FETCH_USER_SUCCESS } from '../constants/actionTypes';
import { LOADING, ERROR, LOADED } from '../constants/states';

const initialState = {
  data: [],
  error: '',
  from: 0,
  limit: 10,
  listStatus: LOADING,
  searchString: '',
  selectedUser: {},
  totalCount: 0,
  userStatus: {},
};

// This listens on the action and then updates the state according to the return value
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      const { userId } = action;
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          [userId]: {},
        },
        userStatus: {
          ...state.userStatus,
          [userId]: LOADING,
        },
      };
    }
    case FETCH_USER_ERROR: {
      const { error, userId } = action;
      return {
        ...state,
        error,
        selectedUser: {
          ...state.selectedUser,
          [userId]: {},
        },
        userStatus: {
          ...state.userStatus,
          [userId]: ERROR,
        },
      };
    }
    case FETCH_USER_SUCCESS: {
      const { user } = action;
      return {
        ...state,
        selectedUser: {
          ...state.selectedUser,
          [user.id]: user,
        },
        userStatus: {
          ...state.userStatus,
          [user.id]: LOADED,
        },
      };
    }
    case FETCH_USERS: {
      return {
        ...state,
        listStatus: LOADING,
      };
    }
    case FETCH_USERS_ERROR: {
      const { error } = action;
      return {
        ...state,
        data: [],
        error,
        listStatus: ERROR,
      };
    }
    case FETCH_USERS_SUCCESS: {
      const { data, totalCount } = action;
      return {
        ...state,
        data,
        from: state.from + state.limit,
        listStatus: LOADED,
        totalCount,
      };
    }
    default: {
      return state;
    }
  }
};
