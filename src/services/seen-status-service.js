import axios from 'axios'
import { API_URL } from '../api/apiUrl'
import authHeader from './auth-header'

const getSeenStatus = async () => {
    try {
        const response = await axios.get(API_URL + 'seenstatus', { headers: authHeader() })
        return response.data  
    } catch (e) {
        console.log(e)
    }
}

const deleteSeenStatus = async (imdbID) => {
    console.log(`deleting: ${imdbID}`)
    try {
        const response = await axios.delete(API_URL + 'seenstatus/film/' + imdbID, { headers: authHeader() })
        return response.data
    } catch (e) {
        console.log(e)
    }
}

const updateSeenStatus = async () => {
    try {

    } catch (e) {
        console.log(e)
    }
}

const SeenStatusService = {
    getSeenStatus,
    deleteSeenStatus,
    updateSeenStatus
}

export default SeenStatusService