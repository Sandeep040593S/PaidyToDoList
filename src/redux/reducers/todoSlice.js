// src/store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

//Have used redux-toolkit becasue of Simplified,Performance Optimizations,Type Safety,Easy Migration:
const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log("Sandeep",JSON.stringify(state)+" hello "+JSON.stringify(action))
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const { index, updatedTodos } = action.payload;
      state.todos[index] = updatedTodos;
    },
    deleteTodo: (state, action) => {
      const index = action.payload;
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
