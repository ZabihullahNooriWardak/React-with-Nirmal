import { createStore } from "redux";


let initData=0;
let reducer=(state=initData,action)=>{
    switch(action.type){
        case 'INCREMENT': return state+1;
        case 'DECREMENT': return state-1;
        default: return state;
    }
}

let store=createStore(reducer);
export default store;