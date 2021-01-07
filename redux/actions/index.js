import {
    LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from '../constants/actionsTypes';

import axiosInstance from '../../helpers/axiosInstance'
import handleErrorResponse from '../../layout/utils/ErrorHandling';


export const signup = (formProps, callback) => async dispatch => {
    formProps.active = 1
    try {
        const response = await axiosInstance.post('/auth/signup', formProps);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        callback();
    } catch (error) {
        handleErrorResponse(error);
        dispatch({ type: REGISTER_ERROR, payload: error.response.data.message })
    }
}

export const signin = (formProps, callback) => async dispatch => {
    formProps.active = 1;
    dispatch({
        type: LOADING
    });
    try {
        const {data} = await axiosInstance.post('/auth/login', formProps);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
        console.log(data)
        localStorage.setItem('token', data.token)
        callback();

    } catch (error) {
        handleErrorResponse(error);
        dispatch({ type: LOGIN_ERROR, payload: error.response.data.message })
    }
}

export const logout = callback => async dispatch => {
    try {
        const response = await axiosInstance.get('/auth/logout');
        localStorage.removeItem('token')
        dispatch({ type: LOGOUT_SUCCESS, payload: response.data });
        callback();
    } catch (error) {
        dispatch({ type: LOGOUT_ERROR, payload: error.response.data })
    }
}