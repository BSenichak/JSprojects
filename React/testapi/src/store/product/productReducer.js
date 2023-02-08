import { LOAD_PRODUCT_FAILURE, LOAD_PRODUCT_START, LOAD_PRODUCT_SUCCESS } from "./productActions"

export const initalState = {
    data: {
        title: null,
        price: 0,
        description: "",
        category: "",
        rating: {
            rate: "",
            count: 0
        },
        image: "blank"
    },
    loading: false,
    error: null
}

export default function ProductReducer(store=initalState, action){
    switch(action.type){
        case LOAD_PRODUCT_START:
            return {
                ...store,
                loading: true
            }
        case LOAD_PRODUCT_SUCCESS:
            return {
                ...store,
                loading: false,
                data: action.payload
            }
        case LOAD_PRODUCT_FAILURE:
            return {
                ...store,
                loading: false,
                error: action.payload
            }
        default:
            return store
    }
}