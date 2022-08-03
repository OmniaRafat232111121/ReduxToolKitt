import {INCREMENT,DECREMENT,INC_VALUE} from './types'

export const INCREMENTACTION=async(dispatch)=>{
return dispatch({type:INCREMENT})

};
export const DECREMENTACTION=async(dispatch)=>{
    return dispatch({type:DECREMENT});
};
export const INC_VALUEACTION=async(v1,dispatch)=>{
    return dispatch({type:INC_VALUE,value:v1,});
}