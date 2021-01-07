import axiosInstance from "../../../helpers/axiosInstance"

export const testData = () => dispatch => {
    axiosInstance.get('/v1/test/all')
    .then(res => console.log("Test Data from axios ", res))
    .catch(err => console.error(err))
}
