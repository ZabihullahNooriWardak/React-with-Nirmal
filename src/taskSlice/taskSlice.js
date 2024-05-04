import { createSlice } from "@reduxjs/toolkit";

let initialState = { tasks: [] };
let taskSlice=createSlice({
    name:"taskManager",
    initialState,
    reducers:{
        addTask: (state, action) => {
          state.tasks=[...state.tasks,action.payload];
        },
        deletTask:(state,action)=>{
            state.tasks=state.tasks.filter((task,index)=>index!==action.payload)
        },
        updateTask:(state,action)=>{
            state.tasks[action.payload.index]=action.payload.task;
        }
    }
});
export const {addTask,deletTask,updateTask}=taskSlice.actions;
export default taskSlice.reducer;