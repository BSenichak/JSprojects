import { FAILUED_LOGIN, FAILUED_REGISTER, START_LOGIN, START_REGISTER, SUCCESS_LOGIN, SUCCESS_REGISTER } from "./authActions";

const initalstate = {
    loginLoading: false,
    token: null,
    error: null,
    regError: null
}

export default function authReducer(state=initalstate, action){
    switch(action.type){
        case START_LOGIN:
            return {
                ...state,
                loginLoading: true
            }
        case FAILUED_LOGIN:
            return {
                ...state,
                loginLoading: false,
                error: action.payload
            }
        case SUCCESS_LOGIN:
            return {
                ...state,
                loginLoading: false,
                token: action.payload,
                error: null,
            }
        case START_REGISTER:
            return {
                ...state,
                registerLoading: true
            }
        case FAILUED_REGISTER:
            return {
                ...state,
                registerLoading: false,
                regError: action.payload
            }
        case SUCCESS_REGISTER:
            return {
                ...state,
                registerLoading: false,
                token: "hello world",
                regError: null,
            }
            
        default:
            return state;
    }
}