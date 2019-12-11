import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import login from '../reducers/loginReducer';
import profile from '../reducers/profileReducer';


const reducers = combineReducers({
    login,
    profile
});

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;