import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import TodoList from "../components/TodoList";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.removeTodo = this.removeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="ToDo aplication" numberOfTasks={this.state.data.length} />
        <TodoList taskToDo={this.state.data} remove={this.removeTodo} />
        <TodoForm add={this.addTodo} />
      </div>
    );
  }
}

export default App;