import axios from 'axios';

const URL_SERVICE = 'http://192.168.11.5:5000/api';

export const login = async (user) => {
    return await axios.post(URL_SERVICE + '/login', user);
}

export const createAccount = async (user) => {
    return await axios.post(URL_SERVICE + '/login/createAccount', user);
}

export const getProfile = async (user) => {
    return await axios.get(URL_SERVICE + '/profile?', {
        params: {
            UserId: user
        }
    });
}