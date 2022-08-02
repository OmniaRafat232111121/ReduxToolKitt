import {INCREMENT,DECREMENT} from '../actions/INCREMENT'
const  counterReducer=(state={coun},action)=>{
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
