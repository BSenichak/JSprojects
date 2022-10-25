import { ADD_NEW_ITEM, ADD_USER, CHANGE_TEXT, SWITCH_LAMP } from "./actionNames"
import axios from "axios"

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

export const addUser = () =>{
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => dispatch(addNewUsers(json)))
    }
}

export const addNewUsers = (users) =>{
    return {
        type: ADD_USER,
        payload: JSON.stringify(users) 
    }
}