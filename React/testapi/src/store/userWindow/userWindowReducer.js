import { TOGGLE_STATE_USER_WINDOW } from "./userWindowActions";

const initalState = {
    windowState: false,
    autorized: false
}

export default function userWindowReducer(state=initalState, action){
    switch(action.type){
        case TOGGLE_STATE_USER_WINDOW:
            return {
                ...state,
                windowState: !state.windowState
            }
        default:
            return state;
    }
}