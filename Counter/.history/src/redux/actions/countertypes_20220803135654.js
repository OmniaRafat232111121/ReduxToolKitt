import {INCREMENT,DECREMENT,INC_VALUE} from './types'

export const INCREMENTACTION=()=>{
return{
    type:INCREMENT
}
}

export const DECREMENTACTION=()=>{
    return{
        type:DECREMENT
    }
} const INC_VALUE=(value)=>{
    return{
        type:INC_VALUE,
        payload:value
    }
}