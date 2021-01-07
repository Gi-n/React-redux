import { FETCH_USERS, FETCH_USERS_ERROR ,LOADING} from "../../constants/actionsTypes";
import axiosInstance from "../../../helpers/axiosInstance";

export const fetchUsers = () => async dispatch => {
    dispatch({type:LOADING})
    try {
        const response = await axiosInstance.post('/v1/users/all');
        dispatch({ type: FETCH_USERS, payload: response.data });
        // callback();
    } catch (error) {
        dispatch({ type: FETCH_USERS_ERROR, payload: error.response  })
    }
}