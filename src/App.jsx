import React, { useContext, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Checked from "./components/Checked";
import { Button } from "./components/Button";
import Collection from "./components/Collection";
import { TodoProvider, TodoContext } from "./TodoContext";

const App = () => {

  return (
    <TodoProvider>
      <MainApp />
    </TodoProvider>
  );
};

const MainApp = () => {
  const { clearButton } = useContext(TodoContext);

  return (
    <div className="container">
      <TodoForm />
      <Collection />
      <TodoList />

      <Button onClick={clearButton}>clear</Button>
    </div>
  );
};

export default App;

// const deleteTodo = (id) => {
//   settodos(
//     (curerrentodos) =>
//       curerrentodos.filter((currentid) => currentid.id !== id), // another method not using array methods
//   );
// };

// if (editId !== null) {
//       settodos((curerrentodos) =>
//         curerrentodos.map((t) =>
//           t.id === editId ? { ...t, task: newItem } : t,
//         ),
//       );
