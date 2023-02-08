import axios from "axios";

export const LOAD_PRODUCT_START = "LOAD_PRODUCT_START"
export const LOAD_PRODUCT_SUCCESS = "LOAD_PRODUCT_SUCCESS"
export const LOAD_PRODUCT_FAILURE = "LOAD_PRODUCT_FAILURE"

export const loadProduct = (id) => {
    return dispatch => {
        dispatch(loadProductStart())
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            dispatch(loadProductSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(loadProductFailure(err))
        })
    }
}


export const loadProductStart = () =>{
    return {
        type: LOAD_PRODUCT_START
    }
}
export const loadProductFailure = (err) =>{
    return {
        type: LOAD_PRODUCT_FAILURE,
        payload: err
    }
}
export const loadProductSuccess = (data) =>{
    return {
        type: LOAD_PRODUCT_SUCCESS,
        payload: data
    }
}