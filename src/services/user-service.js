import axios from 'axios'
import authHeader from './auth-header'
import { API_URL } from '../api/apiUrl'

const getMyProfile = () => {
    return axios.get(API_URL + 'users/me', { headers: authHeader() });
}

export default getMyProfile