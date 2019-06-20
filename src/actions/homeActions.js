import { GET_TEST } from './types';
import axios from 'axios';

// Thunks
export const getTest = () => async dispatch => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_TEST,
    payload: res.data
  });
};
