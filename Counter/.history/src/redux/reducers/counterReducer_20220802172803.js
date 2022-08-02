import {INCREMENT} from '../actions/INCREMENT'
const  counterReducer=(state={},action)=>{
    if(action.type==='INCREMENT'){
        return state.count+1;
    }
    else if(action.type==='DECREMENT')
    {
        return state.count-1;
    }
    return state
return state;
}
export default counterReducer;