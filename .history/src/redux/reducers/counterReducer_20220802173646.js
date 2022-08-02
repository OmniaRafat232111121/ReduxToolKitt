import {INCREMENT} from '../actions/INCREMENT'
import {DECREMENT} from '../actions/INC'
const  counterReducer=(state={count:0},action)=>{
    switch(action.type){
        case INCREMENT:
    
             return state.count+1;
    
        case DECREMENT:
             return state.count-1;
    
        default:
            return state;
}
}
export default counterReducer;
