const initalState = {
    profile: {},
    loading: false
}

export default function receitas(state = initalState, action) {
    switch (action.type) {
        case 'GET_PROFILE':
            state.profile = action.payload
            state.loading = false
            return Object.assign({}, state);
        case 'GET_PROFILE_FAILED':
            return Object.assign({}, state);
        case 'IS_LOADING':
            state.loading = false
            return Object.assign({}, state);
        default:
            return state;
    }
}