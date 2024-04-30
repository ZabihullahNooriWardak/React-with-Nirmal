import { useDispatch, useSelector } from "react-redux"

function Cart(){
    let roleSelector=useSelector(state=>state.lr.loginDet)
   let cartElements= useSelector(state=>state.pr.cart);
                 let deleteDispatch=useDispatch();
       function deleteHandler(inde){
        deleteDispatch({type:"DELETE",value:inde})
       }
    return(
      <div className="customDiv">
        <h3>Cart component- User:-{roleSelector}</h3>
        <hr/>
         <ul>
            {cartElements.map((element,index,arr)=>{
                return <li onClick={()=>deleteHandler(index)} key={index}>{element}</li>
            })}
         </ul>
      </div>
    )
}
export default Cart