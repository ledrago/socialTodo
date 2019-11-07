import axios from "axios";
import { setAlert } from "./alert";
import { GET_USERS, POST_ERROR } from "./types";

export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get(`/api/users`);

    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
