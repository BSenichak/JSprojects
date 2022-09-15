import { SWITCH_LAMP, CHANGE_TEXT, ADD_NEW_ITEM } from "./actionNames"

const initalState = {
    lampState: false,
    text: "",
    items: []
}

export function generalReducer(store = initalState, action){
    switch(action.type){
        case CHANGE_TEXT:
            return {...store, text: action.payload}
        case SWITCH_LAMP:
            return {...store, lampState: !store.lampState}
        case ADD_NEW_ITEM:
            return { ...store, items: [...store.items, action.payload], text: ""}
        default:
            return store
    }
}