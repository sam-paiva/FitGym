const initalState = {
    user: '',
    authenticated: false,
    loading: false,
    loginError: false,
    successCreateAccount: false
}

export default function receitas(state = initalState, action) {
    switch (action.type) {
        case 'FETCH_LOGIN':
            state.authenticated = action.payload.authenticated,
                state.loading = false;
            state.loginError = false;
            return Object.assign({}, state);
        case 'LOGIN_FAILED':
            state.authenticated = action.payload.authenticated
            state.loading = false,
                state.loginError = true
            return Object.assign({}, state);
        case 'IS_LOADING':
            state.loading = false
            state.successCreateAccount = false
            return Object.assign({}, state);
        case 'CREATE_ACCOUNT':
            state.successCreateAccount = true
            state.loading = false;
            return Object.assign({}, state);
        case 'CREATE_ACCOUNT_FAILED':
            state.successCreateAccount = false;
            state.loading = false;
            return Object.assign({}, state);
        default:
            return state;
    }
}