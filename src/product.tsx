import React, { useState } from "react";
interface productProps{
    name:string;
    id?:number;
}
const Product :React.FC<productProps> =(props)=>{
   let [num,setNum]= useState<number|string>(0)
return(
    <>
    <h1>this is product component</h1>
    <button onClick={()=>{setNum("ali")}}>clicke</button>
    </>

)
}
export default Product;