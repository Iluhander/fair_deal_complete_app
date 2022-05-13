import axios from "axios";

const $host = axios.create({
   baseURL: process.env.REACT_APP_API_URL
});

const $authenticatedHost = axios.create({
   baseURL: process.env.REACT_APP_API_URL
});

const authenticatedInterceptor = (config) => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
   return config;
}

$authenticatedHost.interceptors.request.use(authenticatedInterceptor);

export  {
   $host,
   $authenticatedHost
}