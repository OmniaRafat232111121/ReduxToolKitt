import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducers";


 combineReducers({
    user:userReducer
    couter:counterReducer

})

export default combineReducers