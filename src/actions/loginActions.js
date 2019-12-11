import * as api from '../service/apiService';
import { onSignIn } from '../service/auth';


export function loginAction(User) {
    return dispatch => {
        try {

            dispatch({ type: 'IS_LOADING' });

            const response = api.login(User);

            response.then(function (res) {
                onSignIn(res.data.accessToken);
                dispatch({ type: 'FETCH_LOGIN', payload: { res, User } })
            })
        }
        catch (ex) {
            dispatch({ type: 'LOGIN_FAILED' })
        }
    }
}

export function createAccountAction(User) {
    return dispatch => {
        try {

            dispatch({ type: 'IS_LOADING' });

            const response = api.createAccount(User);

            response.then(function (res) {
                dispatch({ type: 'CREATE_ACCOUNT', payload: res.data })
            })
        }
        catch (ex) {
            dispatch({ type: 'CREATE_ACCOUNT_FAILED' })
        }
    }
}