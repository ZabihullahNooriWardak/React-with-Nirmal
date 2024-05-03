import { createSlice } from "@reduxjs/toolkit";

let initialState = { tasks: [] };

let taskSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task, index) => index !== action.payload);
    },
    updateTask: (state, action) => {
      const { index, updatedTask } = action.payload;
      state.tasks[index] = updatedTask;
    }
  }
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
