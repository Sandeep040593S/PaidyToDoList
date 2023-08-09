// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../reducers/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;