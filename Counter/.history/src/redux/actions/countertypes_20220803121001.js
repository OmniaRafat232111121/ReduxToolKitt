import {INCREMENT,DECREMENT,I} from './types'

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
export const INC_VALUE=(value)=>{
    return{
        type:INC_VALUE,
        Payload:value
    }
}