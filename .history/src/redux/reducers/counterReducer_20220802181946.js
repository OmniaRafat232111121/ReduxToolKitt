import {INCREMENT,DECREMENT} from '../actions/types'
const  counterReducer=(state={count:0},action)=>{
    switch(action.type){
        case INCREMENT:
    
             return {...state,count:state.count+};
    
        case DECREMENT:
             return state.count-1;
    
        default:
            return state;
}
}
export default counterReducer;
