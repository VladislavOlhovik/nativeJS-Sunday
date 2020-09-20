import { rerender } from "."

let isInit = true
let state

const setState = (nextState)=>{
    if(state !== nextState){
        state= nextState
        rerender()
    }
}

export const myUseState=(initSate)=>{
    if(isInit){
        state=initSate
        isInit=false
    }
    return [state,setState]
}