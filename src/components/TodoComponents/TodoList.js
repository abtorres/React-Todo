// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => (
  <div className='todo-list'>
    {props.todoList.map(todo => <Todo key={todo.id} {...todo} toggleTodo={props.toggleTodo} />)}
  </div>
);

export default TodoList;