import React, { useState, createContext, useEffect } from "react";

// Create context
export const TodoContext = createContext();

// Create provider
export const TodoProvider = ({ children }) => {
  const [newItem, setNewItem] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(()=>{
    console.log(todos)
  },[todos])

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
          length++;
        }
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

  const toggleCheck = (id) => {
    settodos((curerrentodos) => {
      const updatedTodo = [];
      let length = 0;
      for (let i = 0; i < curerrentodos.length; i++) {
        if (curerrentodos[i].id === id) {
          updatedTodo[length] = {
            ...curerrentodos[i],
            completed: !curerrentodos[i].completed,
          };
        } else {
          updatedTodo[length] = { ...curerrentodos[i] };
        }
        length++;
      }
      return updatedTodo;
    });
  };

  // this still not worked

 const getFilteredTodos = () => {
  if (filter === "All") return todos;

  if (filter === "Completed") {
    return todos.filter((todo) => todo.completed === true);
  }

  if (filter === "Active") {
    return todos.filter((todo) => todo.completed === false);
  }
};

  const clearButton = () => {
    settodos([]); 
  }
  //functionName(()=>{})

  // useEffect ( ()=>{
  //   console.log("Button Clicked"),[filter]
  // })
  return (
    <>
      <TodoContext.Provider
        value={{
          newItem,
          setNewItem,
          handleSubmit,
          todos,
          settodos,
          editTodo,
          deleteTodo,
          aarowUp,
          aarowDown,
          setFilter,
          filter,
          getFilteredTodos,
          toggleCheck,
          clearButton
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
