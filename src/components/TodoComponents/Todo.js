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
