import React, { useState } from "react";

import Todos from "./Todos";

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

  return (
    <div className="App">
      <h1>todo list</h1>
      <Todos todos={todos} updateIsDone={updateIsDone}></Todos>
      <div>
        <input type="text" onChange={onInputChange} value={todoInput}></input>{" "}
        <button onClick={addTodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
