import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { addTodo,updateTodo, deleteTodo } from '../src/redux/reducers/todoSlice';

describe('todoSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { todos: todoReducer },
    });
  });


 //Test case for addToDO
  it('should add a todo', () => {
    store.dispatch(addTodo({ title: "AddTask1" }));
    const todos = store.getState().todos;
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('AddTask1');
  });

    //Test case for Update toDO
  it('should update a todo', () => {
    store.dispatch(addTodo({ title: 'Add Task1' }));
    store.dispatch(addTodo({ title: 'Add Task2' }));
    const todos = store.getState().todos;
    const updatedTodos = { ...todos[1], title: 'Add Task 3' };
    store.dispatch(updateTodo({"index":1,"updatedTodos":updatedTodos})); 
    const newtodos = store.getState().todos;
    const updatedTodoInState = newtodos.find(todo => todo.title === 'Add Task 3');
    expect(updatedTodoInState.title).toBe('Add Task 3');
  });

   //Test case for Remove toDO
  it('should delete a todo', () => {
    store.dispatch(addTodo({ title: "AddTask1" }));
    store.dispatch(addTodo({ title: "AddTask2" }));
    store.dispatch(deleteTodo(1));
    const todos = store.getState().todos;
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe('AddTask1');
  });

});