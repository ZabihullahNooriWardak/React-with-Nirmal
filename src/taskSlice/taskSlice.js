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
        }
    }
});
export const {addTask,deletTask}=taskSlice.actions;
export default taskSlice.reducer;