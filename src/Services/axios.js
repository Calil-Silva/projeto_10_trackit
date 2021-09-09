import axios from "axios";

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth'

function postLogin(body) {
    const promise = axios.post(`${BASE_URL}/login`, body);
    return promise;
};

function postRegister(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);
    return promise;
}

export {
    postLogin,
    postRegister
};