import {INCREMENT} from '../actions/INCREMENT'
const  counterReducer=(state={},action)=>{
    if(action.type==='INCREMENT'){
        return state.count+1;
    }
    elseif(action.type==='DECREMENT')
return state;
}
export default counterReducer;