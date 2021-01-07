import axios from 'axios';
import history from '../history';
import { Notifications } from '../layout/utils/Notifications';

const baseURL = process.env.REACT_APP_API_URL;
let headers = {};

const axiosInstance = axios.create({
    baseURL,
    headers,
})


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `jwt ${token}` : '';
    return config;
  });


// Axios Interceptors
axiosInstance.interceptors.response.use(response => new Promise((resolve, reject) => {
    resolve(response);    
}), (error) => {
    if (!error.response) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }

    if (error.response.status === 401) {
        localStorage.removeItem("token");
        history.push('/auth/login');
    } else {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
});


export default axiosInstance;