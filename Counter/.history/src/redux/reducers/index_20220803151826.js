import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducers";


export default combineReducers({
    user:userReducer,
    couter:counterReducer

})
