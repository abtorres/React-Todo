import React from 'react';
import './Todo.css';
import styled from 'styled-components';

const HoverTodo = styled.h3`
    :hover {
        cursor: pointer;
    }
`

const Todo = (props) => (
    <HoverTodo>
        className={props.completed ? 'todo completed' : 'todo'}
        onClick={() => props.toggleTodo(props.id)}>
            {props.task}
    </HoverTodo>
    
);

export default Todo;