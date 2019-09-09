import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import $ from "jquery";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      todo: ''
    };
  };

  onChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      task: this.state.todo,
      completed: false
    };
    if(newTodo.task !== "") {
      this.setState({
        todo: '',
        todoList: [...this.state.todoList, newTodo]
      })
    };
  }

  onDelete = (e) => {
    e.preventDefault();
    console.log(e)
  }

  componentDidUpdate() {
    $("h3").click(function() {
      $(this).toggleClass("strike");
    });
  }

  render() {
    return (
      <div>
        <TodoForm onChange={this.onChange} onSubmit={this.onSubmit} todo={this.state.todo} onDelete={this.onDelete}/>
        <Todo todoList={this.state.todoList} />
      </div>
    );
  };
};

export default App;
