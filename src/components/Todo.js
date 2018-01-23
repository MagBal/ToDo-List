import React from "react";

const Todo = ({ item, removeItem }) => {
  return <li onClick={() => removeItem(item.id)}>{item.text}</li>;
};

export default Todo;





