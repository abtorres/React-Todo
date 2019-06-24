import React from 'react';
import Todo from './components/TodoComponents/Todo';
import './app.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({todos: this.state.todos.concat(this.state.value)});
    event.preventDefault();
    this.setState({value: ''});
  }

  componentDidUpdate(){
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }


  componentDidMount(){
    let ttodos = JSON.parse(localStorage.getItem('todos'));
    if(ttodos){
      this.setState({todos: ttodos});
    }else {
      this.setState({todos: []})
    }
    
  }

  render() {
    return (
      <div className='app'>
        <h2>Welcome to your Todo App!</h2>
        <Todo todos={this.state.todos} value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
