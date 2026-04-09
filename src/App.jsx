import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { TodoProvider } from "./TodoContext";
import { Button } from "./components/Button";
const App = () => {
  //functionName(()=>{})

  // console.log(todos);
  return (
    <TodoProvider>
      <div className="container">
        <TodoForm />
        <TodoList />
         <Button> clear </Button>
      </div>
    </TodoProvider>
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
