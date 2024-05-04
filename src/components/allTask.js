import { useSelector } from "react-redux";
import { deletTask } from "../taskSlice/taskSlice";
import { useDispatch } from "react-redux";
import { ReactComponent as MyIcon } from './deleteIcon.svg';
import { useState } from "react";
import { updateTask } from "../taskSlice/taskSlice";

function  AllTask() {
    let taksArr=useSelector(state=>state.taskList.tasks);
    let dispatch=useDispatch();
    let [edit,setEdit]=useState(null);
    let [update,setUpdate]=useState("");
    function EditHandler(index,task){
      setEdit(index);
      setUpdate(task);
    }
  return (
    <div>
      <h1>All Task</h1>
      <ul>

        {taksArr.length===0? <h4>no Task</h4> :taksArr.map((task,index) => {
          return <li key={index}>{edit}?<> <input value={update}></input><button onClick={dispatch(updateTask({index:index,task:task}))}>Save</button></>:{task}--------------<MyIcon className="icon" onClick={()=>{dispatch(deletTask(index))}}/><button onClick={()=>{EditHandler(index,task)}}>Edit</button></li>;
        })}
      </ul>
    </div>
  );
}
export default AllTask;