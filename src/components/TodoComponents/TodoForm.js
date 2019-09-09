import React from "react";

const TodoForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input value={props.todo} onChange={props.onChange} />
                <button>Add Todo</button>
                <button onClick={props.onDelete}>Delete Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;