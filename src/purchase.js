import { useDispatch, useSelector } from "react-redux";

const Purchase=()=>{
     let products=  useSelector(state=>state.pr.products);
     let selectionHandler=useDispatch()
     function purchaseHandler(e){
       let productName=e.target.options[e.target.selectedIndex].text;
       let price=e.target.value;
       selectionHandler({type:"PURCHASE",value:{productName,price}})
     }
    return(
        <div className="customDiv">
        <h3>Purchase Component - User:-</h3>
        <hr/>
        <select onChange={(e)=>purchaseHandler(e)}>
            {
                products.map((product,index,arr)=>{
                    return <option value={product.price} key={index}>{`${product.pName}-${product.price}`}</option>
                })
            }
        </select>
        </div>
    )
}
export default Purchase;