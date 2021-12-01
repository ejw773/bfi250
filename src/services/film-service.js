import axios from 'axios'
import { API_URL } from '../api/apiUrl'

const getFilms = (bfiSet) => {
    return axios.get(API_URL + 'ranks/' + bfiSet)
}

// const getMyProfile = () => {
//     return axios.get(API_URL + 'users/me', { headers: authHeader() });
// }

// const getMyViewStatus = () => {
//     return axios.get(API_URL + 'viewstatus', { headers: authHeader() });
// }

// const userServices = {
//     getMyProfile,
//     getMyViewStatus
// }

export default getFilms