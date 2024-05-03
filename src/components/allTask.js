import { useSelector } from "react-redux";
import { deletTask } from "../taskSlice/taskSlice";
import { useDispatch } from "react-redux";
import { ReactComponent as MyIcon } from './deleteIcon.svg';


function  AllTask() {
    let taksArr=useSelector(state=>state.taskList.tasks);
    let dispatch=useDispatch();
  return (
    <div>
      <h1>All Task</h1>
      <ul>

        {taksArr.length===0? <h4>no Task</h4> :taksArr.map((task,index) => {
          return <li key={index}>{task}--------------<MyIcon className="icon" onClick={()=>{dispatch(deletTask(index))}}/></li>;
        })}
      </ul>
    </div>
  );
}
export default AllTask;