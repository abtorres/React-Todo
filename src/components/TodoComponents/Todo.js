import React from 'react';
import './Todo.css';

const Todo = (props) => (
    <div
        className={props.completed ? 'todo completed' : 'todo'}
        onClick={() => props.toggleTodo(props.id)}>
            {props.task}
    </div>
    
);

export default Todo;