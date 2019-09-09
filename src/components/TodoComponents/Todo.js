import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return (
        <div>
            {props.todoList.map(todo => <h3 className='todo' key={todo.id} data-key={todo.id}>{todo.task}</h3>)}
        </div>
    )
}

export default Todo;