import { LOAD_CATEGORIES_FAILUED, LOAD_CATEGORIES_START, LOAD_CATEGORIES_SUCCESS, SET_ACTIVE_CATEGORY } from "./categoriesActions"

const initalState = {
    categories: [],
    loading: false,
    error: null,
    active: null
}

export default function categoriesReducer(state=initalState, action){
    switch(action.type){
        case LOAD_CATEGORIES_START:
            return {
                ...state,
                loading: true
            }
        case LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case LOAD_CATEGORIES_FAILUED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                active: action.payload
            }
        default:
            return state
    }
}