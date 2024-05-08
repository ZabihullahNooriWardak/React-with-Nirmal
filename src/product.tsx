import React from "react";
interface productProps{
    name:string;
    id?:number;
}
const Product :React.FC<productProps> =(props)=>{
return(
    <h1>this is product component</h1>

)
}
export default Product;