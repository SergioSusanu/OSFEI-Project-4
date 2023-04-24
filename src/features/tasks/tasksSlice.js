import { createSlice } from "@reduxjs/toolkit";


//Fetch tasks from local storage
const fetchTasksFromLocalStorage = () => {
  let list = localStorage.getItem("tasks");
//   console.log(list);
  if (list) return JSON.parse(list);
  return [];
};

const initialState = {
  items: fetchTasksFromLocalStorage()
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((e) => {
        return e.id !== action.payload;
      });
    },
    updateTaskTitle: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: action.payload.title };
        }
        return item;
      });
    },
    updateTaskCategory: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, 
            category: item.category === 'todo' ? 'done':'todo'
        };
        }
        return item;
      });
    },
    deleteAllTasks:()=> {
        return {items:[]}
    },
    deleteDoneTasks:(state)=>{
        state.items = state.items.filter((e) => e.category === 'todo')
    }
  },
});

export const { addTask, deleteTask, updateTaskTitle, 
    updateTaskCategory, deleteAllTasks, deleteDoneTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer