import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'

const seenStatusService = async () => {
    try {
        const response = await axios.get(API_URL + 'viewstatus', { headers: authHeader() })
        return response.data  
    } catch (e) {
        console.log(e)
    }
}

export default seenStatusService