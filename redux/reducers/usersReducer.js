/* eslint-disable import/no-anonymous-default-export */

import { FETCH_USERS, FETCH_USERS_ERROR, LOADING } from '../constants/actionsTypes';

import INITIAL_STATE from '../initialStates/authInitialState'

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOADING: return { ...state, loading: true }

        case FETCH_USERS: return { ...state, loading: false, data: action.payload, error: null }

        case FETCH_USERS_ERROR: return { ...state, loading: false, error: true, data: action.payload }

        default: return state;
    }

}