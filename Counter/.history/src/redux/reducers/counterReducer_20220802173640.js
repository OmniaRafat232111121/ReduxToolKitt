import {INCREMENT} from '../actions/INCREMENT'
import {} from '../actions/INCREMENT'
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