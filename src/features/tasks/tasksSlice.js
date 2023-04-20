import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: '1',
      title: "aa",
      category: "todo",
    },
    {
      id: '2',
      title: "bb",
      category: "done",
    },
  ],
};

export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers:{
        addTask: (state, action) => {
            state.items.push(action.payload)
        }
    }

})

export const {addTask} = tasksSlice.actions
export default tasksSlice.reducer