import * as api from '../service/apiService';

export function getProfile(UserId) {
    return dispatch => {
        try {

            dispatch({ type: 'IS_LOADING' });

            const response = api.getProfile(UserId);

            response.then(function (res) {
                dispatch({ type: 'GET_PROFILE', payload: res.data })
            })
        }
        catch (ex) {
            dispatch({ type: 'GET_PROFILE_FAILED' })
        }
    }
}