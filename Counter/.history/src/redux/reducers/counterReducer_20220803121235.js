import {INCREMENT,DECREMENT,INC_VALUE} from '../actions/types'
const  counterReducer=(state={count:0},action={
     type:INC_VALUE,
     pa
})=>{
    switch(action.type){
        case INCREMENT:
    
             return {...state,count:state.count+1};
    
        case DECREMENT:
             return {...state,count:state.count-1}
        case INC_VALUE:
               return {...state,count:state.count-1}
      
        default:
            return state;
}
}
export default counterReducer;
