import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
};

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
};

function getHabits(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function postHabit(name, days, token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const body = {
        name,
        days
    }

    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

function deleteHabit(id, token) {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
    return promise;
}

function getTodayHabits(token) {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/habits/today`, config)
    return promise;
}

function postDone(token, id) {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, "", config)
    return promise;
}

function postUndone(token, id) {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, "", config)
    return promise;
}

export {
    postLogin,
    postRegister,
    getHabits,
    postHabit,
    deleteHabit,
    getTodayHabits,
    postDone,
    postUndone
};