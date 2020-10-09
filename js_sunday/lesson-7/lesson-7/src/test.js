export const yo ='yo'


let counter1 = 0 
export function inc() {
    return ++counter1
}

export class Counter {
    constructor(){
        this.counter = 0 
    }
    value(value){
        if(typeof value==="number"){
            this.counter=value
        }else{
            return this.counter
        }
    }
    inc(){
        return ++this.counter
    }
    dec(){
        return--this.counter
    }
}