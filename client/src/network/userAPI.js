import {$host, $authenticatedHost} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (login, email, phone, password) => {
    const response = await $host.post('/user/registration', {login, email, phone, password});

    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
}

export const login = async (login, password) => {
    const response = await $host.post('/user/login', {
        login,
        email: "",
        phone: "",
        password
    });

    localStorage.setItem('token', response.data.token);
    return jwt_decode(response.data.token);
}

export const isAuthorised = async () => {
    const response = await $authenticatedHost.get('/user/authenticate');

    let result = {
        ...jwt_decode(response.data.token),
        first_name: response.data.first_name,
        second_name: response.data.second_name,
        patronymic: response.data.patronymic,
        location: response.data.location
    };

    return result;
}

export const getAccountData = async (login) => {
    let result = await $host.post('/user/get_data', {
        login
    });

    return result;
}

export const getUserDeals = async(login) => {
    let result = await $host.post('/user/get_deals', {
        login
    });

    return result;
}

export const setAccountData = async (accountData) => {
    const response = await $host.post('/user/set_data', accountData);
}

export const createDeal = async(dealData) => {
    const response = await $host.post('/deal/create', dealData);

    return response;
}

export const getDeal = async(dealData) => {
    const response = await $host.post('/deal/get', {id: dealData});

    return response;
}

export const getPicture = async (picName) => {
    return await $host.get(picName);
}