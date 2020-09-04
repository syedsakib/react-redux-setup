import userTypes from './userTypes';

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: '',
        users: action.payload,
      };
    case userTypes.FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        users: [],
      };
    default:
      return state;
  }
};

export default userReducer;
