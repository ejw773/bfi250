import axios from 'axios';
import authHeader from './auth-header';
import { API_URL } from '../api/apiUrl';

const getMyProfile = () => {
  return axios.get(API_URL + 'users/me', { headers: authHeader() });
};

const getMySeenStatus = () => {
  return axios.get(API_URL + 'seenstatus', { headers: authHeader() });
};

const userServices = {
  getMyProfile,
  getMySeenStatus,
};

export default userServices;
