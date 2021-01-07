import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './authReducer';
import users from './usersReducer';
import notes from './notesReducer';

export default combineReducers({
    auth,
    users,
    notes,
    form: formReducer
});