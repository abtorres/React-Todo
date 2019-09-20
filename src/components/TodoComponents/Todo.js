import React, { Component } from 'react'
import TodoForm from './TodoForm'
import './Todo.css';

export class Todo extends Component {
    render(props) {
        return (
            <div className='todos'>
                <div className='todo'>{this.props.todos.map((todo, i) => <h3 key={i}>{todo}</h3>)}</div>
                <TodoForm value={this.props.value} onChange={this.props.onChange} onSubmit={this.props.onSubmit}/>
            </div>
        )
    }
}

export default Todo
import React from 'react';
import './Todo.css';
import styled from 'styled-components';

const HoverTodo = styled.h3`
    :hover {
        cursor: pointer;
    }
`

const Todo = (props) => (
    <HoverTodo
        className={props.completed ? 'todo completed' : 'todo'}
        onClick={() => props.toggleTodo(props.id)}>
            {props.task}
    </HoverTodo>
    
);

export default Todo;
