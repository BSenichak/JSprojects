import { FAILUED_LOGIN, FAILUED_REGISTER, LOAD_TOKEN, START_LOGIN, START_REGISTER, SUCCESS_LOGIN, SUCCESS_REGISTER, UNLOGIN } from "./authActions";

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
            window.localStorage.setItem("token", action.payload.token);
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
            window.localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                registerLoading: false,
                token: "hello world",
                regError: null,
            }
        case LOAD_TOKEN:
            return {
                ...state,
                token: window.localStorage.getItem('token') !== null ? window.localStorage.getItem('token'): null
            }
        case UNLOGIN:
            window.localStorage.removeItem('token')
            return {
                ...state,
                token: null
            }
            
        default:
            return state;
    }
}