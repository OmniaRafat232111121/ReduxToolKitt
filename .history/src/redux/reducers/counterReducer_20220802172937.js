import {INCREMENT,DECREMENT} from '../actions/INCREMENT'
const  counterReducer=(state={},action)=>{
    switch(action.type)
    case INCREMENT:
    
        return state.count+1;
    }
    else if(action.type==='DECREMENT')
    {
        return state.count-1;
    }
    
return state;
}
export default counterReducer;