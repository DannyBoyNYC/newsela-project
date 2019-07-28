import { GET_ORGANIZATIONS, GET_SESSIONS, SET_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
        loading: false
      };
    case GET_SESSIONS:
      return {
        ...state,
        sessions: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
