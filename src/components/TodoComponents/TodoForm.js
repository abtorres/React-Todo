import React, { Component } from 'react'
import './todoform.css'

export class TodoForm extends Component {
    render() {
        return (
            <div className='formdiv'>
                <form className='form' onSubmit={this.props.onSubmit}>
                    <input className='input' type='text' value={this.props.value} onChange={this.props.onChange}></input>
                    <input type='submit' value='submit' onSubmit={this.props.onSubmit}></input>
                </form>
            </div>
        )
    }
}

export default TodoForm
