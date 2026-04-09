import React, { useState, createContext, children } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// Create context
export const TodoContext = createContext();

// Create provider
export const TodoProvider = ({ children }) => {
  const [newItem, setNewItem] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    if (editId !== null) {
      settodos((curerrentodos) => {
        const newEdit = [];
        let length = 0;
        for (let i = 0; i < curerrentodos.length; i++) {
          if (curerrentodos[i].id === editId) {
            newEdit[length] = { ...curerrentodos[i], task: newItem };
          } else {
            newEdit[length] = curerrentodos[i];
          }
          length++;
        }
        return newEdit;
      });
      seteditId(null);
    } else {
      settodos((curerrentodos) => {
        return [
          ...curerrentodos,
          { id: crypto.randomUUID(), task: newItem, completed: false },
        ];
      });
    }

    setNewItem("");
  };

  const editTodo = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        setNewItem(todos[i].task);
        seteditId(todos[i].id);
        break;
      }
    }
  };

  const deleteTodo = (id) => {
    settodos((curerrentodos) => {
      const newtodos = [];
      let length = 0;
      for (let i = 0; i < curerrentodos.length; i++) {
        if (curerrentodos[i].id !== id) {
          newtodos[length] = curerrentodos[i];
        }
        length++;
      }
      return newtodos;
    });
  };

  const aarowUp = (index) => {
    settodos((curerrentodos) => {
      const newtodos = [...curerrentodos];
      if (index === 0) return curerrentodos;

      const temp = newtodos[index];
      newtodos[index] = newtodos[index - 1];
      newtodos[index - 1] = temp;

      return newtodos;
    });
  };

  const aarowDown = (index) => {
    settodos((curerrentodos) => {
      const newTodos = [...curerrentodos];
      if (index === newTodos.length - 1) return curerrentodos;
      const temp = newTodos[index];
      newTodos[index] = newTodos[index + 1];
      newTodos[index + 1] = temp;

      return newTodos;
    });
  };

  //functionName(()=>{})

  // console.log(todos);
  return (
    <>
      <TodoContext.Provider
        value={{
          newItem,
          setNewItem,
          handleSubmit,
          todos,
          editTodo,
          deleteTodo,
          aarowUp,
          aarowDown,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
};

export default TodoContext;

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
