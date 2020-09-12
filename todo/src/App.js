import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const onInputChange = (e) => {
    setTodoInput(e.currentTarget.value);
  };

  const addTodo = () => {
    var newTodos = JSON.parse(JSON.stringify(todos));
    newTodos.push({
      id: todos.length,
      title: todoInput,
      isDone: false,
    });

    setTodos(newTodos);
    setTodoInput("");
  };

  const updateIsDone = (todo) => {
    var newTodos = JSON.parse(JSON.stringify(todos));
    for (var i = 0; i < newTodos.length; i++) {
      if (newTodos[i].id === todo.id) {
        newTodos[i].isDone = !newTodos[i].isDone;
      }
    }

    setTodos(newTodos);
  };

  var todoElements = [];
  for (var i = 0; i < todos.length; i++) {
    const todo = todos[i];
    todoElements.push(
      <div
        key={i}
        style={{ textDecorationLine: todo.isDone ? "line-through" : "" }}
        onClick={() => updateIsDone(todo)}
      >
        {todo.title}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>todo list</h1>
      {todoElements}
      {/* {todos.map((todo, index) => {
        return <div key={index}>{todo}</div>
      })} */}
      <div>
        <input type="text" onChange={onInputChange} value={todoInput}></input>{" "}
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
