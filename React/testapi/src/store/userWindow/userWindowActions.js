export const TOGGLE_STATE_USER_WINDOW = "TOGGLE_STATE_USER_WINDOW"
export const SET_AUTORIZED_STATE = "SET_AUTORIZED_STATE"

export const toggleStateUserWindow = () => {
    return {
        type: TOGGLE_STATE_USER_WINDOW
    }
}

export const setAutorizedState = (state) => {
    return {
        type: SET_AUTORIZED_STATE,
        payload: state
    }
}