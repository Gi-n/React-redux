/* eslint-disable import/no-anonymous-default-export */
import {
    CREATE_NOTES,
    CREATE_NOTES_ERROR,
    EDIT_NOTE,
    EDIT_NOTE_ERROR,
    FETCH_NOTE,
    FETCH_NOTES,
    FETCH_NOTES_ERROR,
    FETCH_NOTE_ERROR,
    DELETE_NOTE_ERROR,
    DELETE_NOTE,
    LOADING
} from "../constants/actionsTypes";
import INITIAL_STATE from "../initialStates/authInitialState";
import _ from 'lodash';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }

        case FETCH_NOTES: return { ...state, loading: false, data: action.payload, error: null }

        case FETCH_NOTES_ERROR: return { ...state, loading: false, error: action.payload, data: null }

        case CREATE_NOTES: return { ...state, loading: false }

        case CREATE_NOTES_ERROR: return { ...state, loading: false, error: action.payload, data: null }

        case FETCH_NOTE: return { ...state, loading: false, [action.payload.id]: action.payload }

        case FETCH_NOTE_ERROR: return { ...state, loading: false, error: action.payload, data: null }

        case EDIT_NOTE: return { ...state, loading: false, [action.payload.id]: action.payload }

        case EDIT_NOTE_ERROR: return { ...state, loading: false, error: action.payload, data: null }

        case DELETE_NOTE: return _.omit(state, action.payload)

        case DELETE_NOTE_ERROR: return { ...state, loading: false, error: action.payload, data: null }

        default: return state;
    }
}