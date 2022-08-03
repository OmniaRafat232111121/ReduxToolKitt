import {INCREMENT,DECREMENT,INC_VALUEACTI} from './types'

export const INCREMENTACTION=()=>{
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