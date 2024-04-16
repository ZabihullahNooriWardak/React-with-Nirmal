import React from "react";
function Product(props){
    let products=[{id:1,name:"Apple"
    },{id:2,name:"banana"},{
        id:3,name:"pear"
    }]
if(props.isAdmin){
    return products.map((item)=><p>{item.name}</p>)
}else{
    return <p>nothing or no data </p> 
}

}
export default Product;