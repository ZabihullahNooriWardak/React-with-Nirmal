import { createSlice } from "@reduxjs/toolkit";

let initialState = { tasks: [] };
let taskSlice=createSlice({
    name:"taskManager",
    initialState,
    reducers:{
        addTask: (state, action) => {
          state.tasks=[...state.tasks,action.payload];
        }
    }
});
export const {addTask}=taskSlice.actions;
export default taskSlice.reducer;