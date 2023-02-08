import axios from "axios";

export const LOAD_CATEGORIES = "LOAD_CATEGORIES"
export const LOAD_CATEGORIES_START = "LOAD_CATEGORIES_START"
export const LOAD_CATEGORIES_SUCCESS = "LOAD_CATEGORIES_SUCCESS"
export const LOAD_CATEGORIES_FAILUED = "LOAD_CATEGORIES_FAILUED"
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY"

export const loadCategories = () => {
    return dispatch => {
        dispatch(loadCategoriesStart())
        axios.get('https://fakestoreapi.com/products/categories')
        .then((res)=>dispatch(loadCategoriesSuccess(res.data)))
        .catch((err)=>dispatch(loadCategoriesFailued(err)))
    }
}

export const loadCategoriesStart = () => {
    return {
        type: LOAD_CATEGORIES_START,
    }
}
export const loadCategoriesSuccess = (data) => {
    return {
        type: LOAD_CATEGORIES_SUCCESS,
        payload: data
    }
}
export const loadCategoriesFailued = (err) => {
    return {
        type: LOAD_CATEGORIES_FAILUED,
        payload: err
    }
}

export const setActiveCategory = (data) => {
    return {
        type: SET_ACTIVE_CATEGORY,
        payload: data
    }
}