import React from "react";
import { Link, useMatch } from "react-router-dom";
function Course(){
    let usematch=useMatch();
console.log(usematch);
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
export default Course;