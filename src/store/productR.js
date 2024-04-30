import { act } from "react"

const initData={
    products:[
        {pName:'Apple',price:20},
        {pName:'Banana',price:3},
        {pName:'Orange',price:10},
        {pName:'Grapes',price:8},
        {pName:'Mango',price:45}
    ],
    cart:[],
    total:0,
}

const productReducer=(state=initData,action)=>{
    if(action.type==="PURCHASE"){
    return {...state,
        cart:[...state.cart,{name:action.value.productName,price:action.value.price}],
        total:state.total+parseInt(action.value.price)
    }
    }
    if(action.type==="DELETE"){
        let newTotal=state.total-parseInt(action.value.element.price);
        let newCart=state.cart.filter((element,index)=>{
            return index!==action.value.index;
        })
        return {...state,total:newTotal,cart:newCart}
    }
return state;
}
export default productReducer;