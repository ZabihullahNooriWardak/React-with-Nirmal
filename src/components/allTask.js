import { useSelector } from "react-redux";
import { deletTask } from "../taskSlice/taskSlice";
import { useDispatch } from "react-redux";
function  AllTask() {
    let taksArr=useSelector(state=>state.taskList.tasks);
    let dispatch=useDispatch();
  return (
    <div>
      <h1>All Task</h1>
      <ul>

        {taksArr.length===0? <h4>no Task</h4> :taksArr.map((task,index) => {
          return <li onClick={()=>{dispatch(deletTask(index))}} key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
export default AllTask;