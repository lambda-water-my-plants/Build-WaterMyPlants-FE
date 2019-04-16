import axios from 'axios'

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

expor const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post()
}
