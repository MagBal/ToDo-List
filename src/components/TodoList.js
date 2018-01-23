import React from "react";
import style from "./TodoList.css";
import Todo from "./Todo";

const TodoList = ({ taskToDo, remove }) => {
  const todoList = taskToDo.map(todo => {
    return <Todo item={todo} removeItem={remove} key={todo.id} />;
  });

  return <ol>{todoList}</ol>;
};

export default TodoList;