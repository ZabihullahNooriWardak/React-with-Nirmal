import { useSelector } from "react-redux"

function Cart(){
   let cartElements= useSelector(state=>state.pr.cart);

    return(
      <div className="customDiv">
        <h3>Cart component- User:-</h3>
        <hr/>
         <ul>
            {cartElements.map((element,index,arr)=>{
                return <li key={index}>{element}</li>
            })}
         </ul>
      </div>
    )
}
export default Cart