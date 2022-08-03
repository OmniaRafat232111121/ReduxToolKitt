import {INCREMENT,DECREMENT,INC_VALUE} from './types'

export const INCREMENTACTION=async(dispatch)=>{
return{
    type:INCREMENT
}
}

export const DECREMENTACTION=async()=>{
    return{
        type:DECREMENT
    }
}
export const INC_VALUEACTION=async(v1)=>{
    return{
        type:INC_VALUE,
        value:v1,
    }
}