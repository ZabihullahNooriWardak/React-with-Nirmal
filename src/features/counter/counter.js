import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,resetTheValue,incrementByAmount } from "./counterSlice";
export function Counter() {
    const count = useSelector((state) => state.counterc.value);
    const dispatch = useDispatch();
                    let [amount,setAmount]=useState(0)
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button><br>
            </br>
            <button onClick={()=>dispatch(resetTheValue())}>reset</button><br></br>
            <input type="number" value={amount} onFocus={()=>{setAmount("")}}onChange={(e)=>{setAmount(parseInt(e.target.value))}} placeholder="Enter the number"></input><br>
            </br>
            <button onClick={(e)=>dispatch(incrementByAmount(amount))}>incrementByAmount</button>
        </div>
    );
}
// let x=2;   x+="" console.log(x) //2 
// let x=2; x+=" " console.log(x) //"2 " I mean it converts the number to string and then concatenate.