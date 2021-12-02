import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'

const filmService = (bfiSet) => {
    return axios.get(API_URL + 'ranks/my/' + bfiSet, { headers: authHeader() })
}

export default filmService