import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'

const filmService = async (bfiSet) => {
    try {
        const response = await axios.get(API_URL + 'ranks/my/' + bfiSet, { headers: authHeader() })
        return response.data  
    } catch (e) {
        console.log(e)
    }
}

export default filmService