import {INCREMENT} from '../actions/INCREMENT'
const  counterReducer=(state={},action)=>{
    if(action.type==='INCREMENT'){
        return state
    }
return state;
}
export default counterReducer;