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
}
export const INC_VALUEACT=(v1)=>{
    return{
        type:INC_VALUE,
        value:v1,
    }
}