import {INCREMENT,DECREMENT,INC_VALUE} from './types'

export const INCREMENTACTION=a()=>{
return{
    type:INCREMENT
}
}

export const DECREMENTACTION=()=>{
    return{
        type:DECREMENT
    }
}
export const INC_VALUEACTION=(v1)=>{
    return{
        type:INC_VALUE,
        value:v1,
    }
}