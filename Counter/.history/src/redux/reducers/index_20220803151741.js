import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducers";


const combineReducers({
    user:userReducer
    couter:counterReducer

})

export default combineReducers