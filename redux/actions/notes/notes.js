import {
    FETCH_NOTES,
    FETCH_NOTES_ERROR,
    LOADING, CREATE_NOTES,
    CREATE_NOTES_ERROR,
    FETCH_NOTE,
    FETCH_NOTE_ERROR,
    EDIT_NOTE,
    EDIT_NOTE_ERROR,
    DELETE_NOTE,
    DELETE_NOTE_ERROR
} from '../../constants/actionsTypes';

import axiosInstance from '../../../helpers/axiosInstance';

export const fetchNotes = () => async dispatch => {

    dispatch({
        type: LOADING
    })
    try {
        let response = await axiosInstance.get('/v1/notes/all');
        dispatch({ type: FETCH_NOTES, payload: response.data.notes });
    } catch (error) {
        dispatch({ type: FETCH_NOTES_ERROR, payload: error.response.data });
    }
}

export const createNote = (formValues, callback) => async dispatch => {

    dispatch({
        type: LOADING
    })

    try {
        const response = await axiosInstance.post('/v1/notes/save_notes', formValues);
        dispatch({ type: CREATE_NOTES, payload: response.data.newNote })
        callback();
    } catch (error) {
        dispatch({ type: CREATE_NOTES_ERROR, payload: error.response.data })
    }

}

export const fetchNote = id => async dispatch => {
    dispatch({ type: LOADING })
    try {
        const response = await axiosInstance.get(`/v1/notes/${id}`);
        dispatch({ type: FETCH_NOTE, payload: response.data.notes })
    } catch (error) {
        dispatch({ type: FETCH_NOTE_ERROR, payload: error.response.data })
    }
}

export const editNote = (id, formValues, callback) => async dispatch => {
    dispatch({ type: LOADING })
    try {
        const response = await axiosInstance.put(`/v1/notes/${id}`, formValues);
        dispatch({ type: EDIT_NOTE, payload: response.data.updatedNote });
        callback();
    } catch (error) {
        dispatch({ type: EDIT_NOTE_ERROR, payload: error.response.data })
    }
}

export const deleteNote = (id,callback) => async dispatch => {
    try {
        const response = await axiosInstance.delete(`/v1/notes/${id}`);
        dispatch({type: DELETE_NOTE , payload : response.data});
        callback();
    } catch (error) {
        console.error(error);
        dispatch({type: DELETE_NOTE_ERROR, payload: error.response})
    }
}