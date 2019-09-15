import React from "react";

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input value={props.todo} onChange={props.onChange} required />
                <button type='submit'>Add Todo</button>
                <button onClick={props.onClick}>Delete Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;