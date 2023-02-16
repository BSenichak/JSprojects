import axios from "axios";

export const TOGGLE_STATE_USER_WINDOW = "TOGGLE_STATE_USER_WINDOW";
export const LOAD_RANDOM_USER = "LOAD_RANDOM_USER";
export const START_LOAD_RANDOM_USER = "START_LOAD_RANDOM_USER";
export const FAILUED_LOAD_RANDOM_USER = "FAILUED_LOAD_RANDOM_USER";
export const SUCCESS_LOAD_RANDOM_USER = "SUCCESS_LOAD_RANDOM_USER";


export const toggleStateUserWindow = () => {
    return {
        type: TOGGLE_STATE_USER_WINDOW
    }
}

export const loadRandomUser = () => {
    return dispatch => {
        dispatch(startLoadRandomUser())
        axios.get("https://randomuser.me/api/")
        .then(res=>dispatch(successLoadRandomUser(res.data.results[0])))
        .catch(err=>dispatch(failuedLoadRandomUser(err)))
    }
}

export const startLoadRandomUser = () => {
    return {
        type: START_LOAD_RANDOM_USER,
    }
}

export const failuedLoadRandomUser = (err) => {
    return {
        type: FAILUED_LOAD_RANDOM_USER,
        payload: err
    }
}

export const successLoadRandomUser = (data) => {
    return {
        type: SUCCESS_LOAD_RANDOM_USER,
        payload: data
    }
}

