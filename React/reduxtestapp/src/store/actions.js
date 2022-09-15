import { ADD_NEW_ITEM, CHANGE_TEXT, SWITCH_LAMP } from "./actionNames"

export const switchLamp = () =>{
    return {
        type: SWITCH_LAMP,
        payload: "Heieie"
    }
}

export const changeText = (text) =>{
    return {
        type: CHANGE_TEXT,
        payload: text
    }
}

export const addNewItem = (text) =>{
    return {
        type: ADD_NEW_ITEM,
        payload: text
    }
}