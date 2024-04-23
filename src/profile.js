import React from "react";
import { Link } from "react-router-dom";
function Profile(){
    let arr=[0,1,2,3,4,5,6]
    return <div>
        <ul>
            <Link><li><h3>Javascript interveiw question</h3></li></Link>
            <Link>
            <li><h3>React with interview Questions</h3></li>
            </Link> 
            <Link>   
            <li><h3>Algorithm and Data structure</h3></li>
            </Link>
        </ul>
    </div>
}
export default Profile;