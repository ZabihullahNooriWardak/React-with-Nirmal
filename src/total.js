import { useSelector } from "react-redux";

const Total=()=>{
    let totalAmount=useSelector(state=>state.pr.total)
    return(
        <div className="customDiv">
             <h3>Total Component - User:-</h3>
             <hr/>
             <h2>Total :{totalAmount} </h2>
        </div>
    )
}
export default Total;