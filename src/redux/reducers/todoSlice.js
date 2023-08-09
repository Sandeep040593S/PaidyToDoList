// src/store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

//Have used redux-toolkit becasue of Simplified,Performance Optimizations,Type Safety,Easy Migration:
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { index, updatedTodos } = action.payload;
      state[index] = updatedTodos;
    },
    deleteTodo: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
