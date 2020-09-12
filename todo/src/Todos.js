import React from "react";

const Todos = (props) => {
  var todoElements = [];
  const todos = props.todos;
  for (var i = 0; i < todos.length; i++) {
    const todo = todos[i];
    todoElements.push(
      <div
        key={i}
        style={{ textDecorationLine: todo.isDone ? "line-through" : "" }}
        onClick={() => props.updateIsDone(todo)}
      >
        {todo.title}
      </div>
    );
  }

  return <div>{todoElements}</div>;
};

export default Todos;
