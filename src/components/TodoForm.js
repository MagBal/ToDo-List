import React from "react";
import style from "./TodoForm.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleClick(e) {
    this.setState({ text: "" });
    this.props.add(this.state.text);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="new task"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={e => this.handleClick(e)}>Add</button>
      </div>
    );
  }
}

export default TodoForm;
