import axios from 'axios';
import { axiosWithAuth } from '../util/axiosWithAuth';


export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const GET_FRIENDS_START = 'GET_FRIENDS_START';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAILURE = 'GET_FRIENDS_FAILURE';

export const ADD_FRIENDS_START = 'ADD_FRIENDS_START';
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS';
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE';

export const login = (props, user) => dispatch => {
  dispatch({ type: LOGIN_START });

  axios
    .post('http://localhost:5000/api/login', user)
    .then(res => {
      dispatch({ type: LOGIN_SUCCESS });
      localStorage.setItem('token', res.data.payload);
      props.history.push('/friends');
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const logout = props => {
    localStorage.removeItem('token');
    return { type: LOGOUT_USER };
  };

export const getFriends = () => dispatch => {
  dispatch({ type: GET_FRIENDS_START });

  axiosWithAuth()
    .get('/friends')
    .then(res => {
      console.log(res.data);
      dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_FRIENDS_FAILURE, payload: err.response });
    });
};

export const addFriends = friend => dispatch => {
  dispatch({ type: ADD_FRIENDS_START });

  axiosWithAuth()
    .post('/friends', friend)
    .then(res => {
      dispatch({ type: ADD_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIENDS_FAILURE, payload: err.response });
    });
};