import { useSelector } from "react-redux";

function  AllTask() {
    let taksArr=useSelector(state=>state.taskList.tasks);
  return (
    <div>
      <h1>All Task</h1>
      <ul>

        {taksArr.length===0? <h4>no Task</h4> :taksArr.map((task,index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </div>
  );
}
export default AllTask;