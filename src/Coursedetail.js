import React from "react";
import { useParams} from "react-router-dom";
function Coursedetail(){
   let myParams=useParams();
    return <div>
<h2>coursedetail page ...{myParams.details}</h2>
    </div>
}
export default Coursedetail;