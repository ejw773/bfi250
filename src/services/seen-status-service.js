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
    try {
        const response = await axios.delete(API_URL + 'seenstatus/film/' + imdbID, { headers: authHeader() })
        return response
    } catch (e) {
        console.log(e)
    }
}

const updateSeenStatus = async (film, seenStatus) => {
    console.log(`Updating: ${film} to ${seenStatus}`)
    try {
        const response = await axios.post(API_URL + 'seenstatus/', {
            film,
            seenStatus 
        }, {
            headers: authHeader()
        })
        return response
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