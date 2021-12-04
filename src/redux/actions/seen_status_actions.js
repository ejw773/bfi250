import {
    GET_SEEN_STATUS_SUCCESS,
    GET_SEEN_STATUS_FAIL
} from '../actionTypes'

import seenStatusService from '../../services/view-status-service'

const getSeenStatus = () => (dispatch) => {
    return seenStatusService().then(
        (response) => {
            dispatch({
                type: GET_SEEN_STATUS_SUCCESS,
                payload: response
            });
            return Promise.resolve()
        },
        (error) => {
            console.log(error)
            dispatch({
                type: GET_SEEN_STATUS_FAIL,
            });
            return Promise.reject();
        }
    )
}

export default getSeenStatus