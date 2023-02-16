import { FAILUED_LOAD_RANDOM_USER, START_LOAD_RANDOM_USER, SUCCESS_LOAD_RANDOM_USER, TOGGLE_STATE_USER_WINDOW } from "./userWindowActions";

const initalState = {
    windowState: false,
    userData: null,
    loading: false,
    error: null
}

export default function userWindowReducer(state=initalState, action){
    switch(action.type){
        case TOGGLE_STATE_USER_WINDOW:
            return {
                ...state,
                windowState: !state.windowState
            }
            case START_LOAD_RANDOM_USER:
                return {
                    ...state,
                    loading: true
                }
            case FAILUED_LOAD_RANDOM_USER:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
            case SUCCESS_LOAD_RANDOM_USER:
                return {
                    ...state,
                    loading: false,
                    userData: action.payload
                }
        default:
            return state;
    }
}