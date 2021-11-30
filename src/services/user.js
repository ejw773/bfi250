import axios from 'axios'
import authHeader from './auth-header'

const API_URL = "https://bfi250-node.herokuapp.com/";

const getMyProfile = () => {
    return axios.get(API_URL + 'users/me', { headers: authHeader() });
}

export default getMyProfile