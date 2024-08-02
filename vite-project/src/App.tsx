import React from 'react'
import './App.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoAppState {
  todos: Todo[];
  inputValue: string;
}

class TodoApp extends React.Component<Record<string, never>, TodoAppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.setState({ todos: JSON.parse(savedTodos) });
    }
  }

  componentDidUpdate(_prevProps: Record<string, never>, prevState: TodoAppState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  handleAddTodo = () => {
    if (this.state.inputValue.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: this.state.inputValue,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      inputValue: '',
    }));
  };

  handleDeleteTodo = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  handleDeleteAllTodos = () => {
    this.setState({ todos: [] });
  };

  handleToggleComplete = (id: number) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    return (
      <div className="todo-container">
        <input
          type="text"
          className="todo-input"
          placeholder="Input TODO"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <div className="todo-buttons">
          <button onClick={this.handleAddTodo}>Add</button>
          <button onClick={this.handleDeleteAllTodos}>Delete all</button>
        </div>
        <div>
          {this.state.todos.map((todo) => (
            <div className="todo-item" key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggleComplete(todo.id)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => this.handleDeleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
