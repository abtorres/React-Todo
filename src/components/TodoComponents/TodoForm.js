import React from "react";
import './TodoForm.css';

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input value={props.todo} onChange={props.onChange} required />
                <button className='button submit-button' type='submit'>Add Todo</button>
                <button className='button delete-button' onClick={props.onClick}>Delete Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;