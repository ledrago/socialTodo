import {
  GET_USERS,
  UPDATE_USER,
  GET_USER,
  USER_ERROR,
  CLEAR_USER
} from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    case UPDATE_USER:
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };
    case USER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        loading: false
      };
    default:
      return state;
  }
}
