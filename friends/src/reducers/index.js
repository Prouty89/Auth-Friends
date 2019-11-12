import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_FRIENDS_START,
    LOGOUT_USER,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAILURE,
    ADD_FRIENDS_START,
    ADD_FRIENDS_SUCCESS,
    ADD_FRIENDS_FAILURE,
  } from '../actions/index';
  
  const initialState = {
    friends: [],
    isLoading: false,
    error: '',
  };
  
  const reducers = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
        case LOGOUT_USER:
            return {
              ...state,
              isLoggedIn: false,
            };
      case GET_FRIENDS_START:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case GET_FRIENDS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
          friends: action.payload,
        };
      case GET_FRIENDS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
          friends: [],
        };
      case ADD_FRIENDS_START:
        return {
          ...state,
          isLoading: true,
          error: '',
        };
      case ADD_FRIENDS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: '',
          friends: action.payload,
        };
      case ADD_FRIENDS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducers;