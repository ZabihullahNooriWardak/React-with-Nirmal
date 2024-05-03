import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice/taskSlice";
import { useState } from "react";
function AddTask(){

    let dispatch=useDispatch();
     let [taksState,setTaskState]=useState("")
    return (
        <>
          <h1>TaskMaster</h1>
        <input value={taksState} onFocus={()=>{setTaskState("")}} onChange={(e)=>{setTaskState(e.target.value)}} placeholder='Enter your task'></input>
        <br></br>
        <br></br>
        <button onClick={()=>{dispatch(addTask(taksState))}}>Add task</button>
        </>
    )
}
export default AddTask;