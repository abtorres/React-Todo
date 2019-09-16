import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import shortid from 'shortid';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [],
      todo: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteCompletedTodos = this.deleteCompletedTodos.bind(this);
  };

  componentDidMount() {
    const list = localStorage.getItem('todos')
    const todolist = JSON.parse(list)
    this.setState(() => ({ todoList: todolist }))
  }

  componentDidUpdate() {
    const todolist = JSON.stringify(this.state.todoList)
    localStorage.setItem('todos', todolist)
  }

  onChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      task: this.state.todo,
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      todo: ''
    })
  }

  toggleTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.map(todo => 
        todo.id === id 
        ? {...todo, completed: !todo.completed}
        : todo
      )
    })
  }

  deleteCompletedTodos () {
    const notCompleted = this.state.todoList.filter((todo) => {
      if(!todo.completed) return(todo);
    })
    this.setState({todoList: notCompleted});
  }

  render() {
    return (
      <div className='App'>
        <h1>Todo-App</h1>
        <TodoForm onChange={this.onChange} onSubmit={this.onSubmit} todo={this.state.todo} onClick={this.deleteCompletedTodos}/>
        <TodoList todoList={this.state.todoList} toggleTodo={this.toggleTodo}/>
      </div>
    );
  };
};

export default App;
