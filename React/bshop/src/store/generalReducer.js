import { combineReducers } from "redux";
import { filterReducer } from "./reducers/filterReducer";
import { headerReducer } from "./reducers/headerReducer"

export const generalReducer = combineReducers({
    header: headerReducer,
    filter: filterReducer
})