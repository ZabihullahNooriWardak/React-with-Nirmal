import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../taskSlice/taskSlice";
import { useState } from "react";
import { ReactComponent as MyIcon } from './deleteIcon.svg';

function AllTask() {
  const tasksArr = useSelector(state => state.taskList.tasks);
  const dispatch = useDispatch();
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleEdit = (index, task) => {
    setEditIndex(index);
    setEditedTask(task);
  };

  const handleUpdate = (index) => {
    dispatch(updateTask({ index, updatedTask: editedTask }));
    setEditIndex(null);
    setEditedTask("");
  };

  return (
    <div>
      <h1>All Task</h1>
      <ul>
        {tasksArr.length === 0 ? <h4>No Task</h4> :
          tasksArr.map((task, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                  />
                  <button onClick={() => handleUpdate(index)}>Save</button>
                </>
              ) : (
                <>
                  {task}
                  <MyIcon
                    className="icon"
                    onClick={() => dispatch(deleteTask(index))}
                  />
                  <button onClick={() => handleEdit(index, task)}>Edit</button>
                </>
              )}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default AllTask;
