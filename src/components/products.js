import React from "react";
function Product(props){
    let products=[{id:1,name:"Apple"
    },{id:2,name:"banana"},{
        id:3,name:"pear"
    }]
    return (props.isAdmin ?products.map((item)=><p>{item.name}</p>) : <p>nothing or no data </p> )
}
export default Product;