/* eslint-disable import/no-anonymous-default-export */

import {
    LOADING,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR
} from '../constants/actionsTypes';

import INITIAL_STATE from '../initialStates/authInitialState'


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOADING: return { ...state, loading: true }

        case REGISTER_SUCCESS: return { ...state, loading: false, data: action.payload, error: null }

        case REGISTER_ERROR: return { ...state, loading: false, error: action.payload, data: null }


        case LOGIN_SUCCESS: return { ...state,loading: false, data: action.payload, error: null };

        case LOGIN_ERROR: return { ...state, loading: false, data: null, error: action.payload }


        case LOGOUT_SUCCESS: return { ...state, loading: false, data: action.payload, error: null };

        case LOGOUT_ERROR: return { ...state, loading: false, data: null, error: action.payload }

        default: return state;
    }

}