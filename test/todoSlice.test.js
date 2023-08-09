import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { addTodo,updateTodo, deleteTodo } from '../src/redux/reducers/todoSlice';

describe('todoSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { todos: todoReducer },
    });
  });


  //Not so good at writing test case have just done basic of it
  it('should add a todo', () => {
    const state =store.getState();
    store.dispatch(addTodo({ title: "newTodoTitle" }));
    const todos = store.getState().todos;
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe('Buy groceries');
  });


});