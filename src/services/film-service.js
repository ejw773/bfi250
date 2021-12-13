import axios from 'axios';
import { API_URL } from '../api/apiUrl';

const filmService = async () => {
  try {
    const response = await axios.get(API_URL + 'ranks/all/withfilms/');
    localStorage.setItem('films', JSON.stringify(response.data));
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default filmService;
