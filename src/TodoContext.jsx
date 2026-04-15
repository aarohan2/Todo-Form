import React, { useState, createContext, useEffect } from "react";

// Create context
export const TodoContext = createContext();

// Create provider
export const TodoProvider = ({ children }) => {
  const [newItem, setNewItem] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(null);
  const [filter, setFilter] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    if (editId !== null) {
      settodos((curerrentodos) => {
        const newTodos = curerrentodos.map((todo) =>
          todo.id === editId ? { ...todo, task: newItem } : todo,
        );
        return newTodos;
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
    const todo = todos.find((todo) => todo.id === id);
    if (todo === undefined) return;

    setNewItem(todo.task);
    seteditId(todo.id);
  };

  // use splice mthod in this

  const deleteTodo = (index) => {
    settodos((curerrentodos) => {
      const newTodos = [...curerrentodos];
      if (index === -1) {
        return curerrentodos;
      } else {
        newTodos.splice(index, 1);
        return newTodos;
      }
    });
  };

  const aarowUp = (index) => {
    settodos((curerrentodos) => {
      const newTodos = [...curerrentodos];
      if (index === 0) {
        return newTodos;
      } else {
        const [item] = newTodos.splice(index, 1); // probkem occurred storing obejct inside if i did item =
        newTodos.splice(index - 1, 0, item);
      }
      return newTodos;
    });
  };

  const aarowDown = (index) => {
    settodos((curerrentodos) => {
      const newTodos = [...curerrentodos];
      if (index === curerrentodos.length - 1) {
        return newTodos;
      } else {
        const [item] = newTodos.splice(index, 1);
        newTodos.splice(index + 1, 0, item);
      }
      return newTodos;
    });
  };

  // not working
  const toggleCheck = (id) => {
    settodos((curerrentodos) => {
      return curerrentodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      );
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
    return todos;
  };

  const clearButton = () => {
    settodos([]);
  };
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
          clearButton,
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

// const deleteTodo = (id) => {
//     settodos((curerrentodos) => {
//       const newtodos = [];
//       let length = 0;
//       for (let i = 0; i < curerrentodos.length; i++) {
//         if (curerrentodos[i].id !== id) {
//           newtodos[length] = curerrentodos[i];
//           length++;
//         }
//       }
//       return newtodos;
//     });

//   };

// const aarowUp = (index) => {
//   settodos((curerrentodos) => {
//     const newtodos = [...curerrentodos];
//     if (index === 0) return curerrentodos;

//     const temp = newtodos[index];
//     newtodos[index] = newtodos[index - 1];
//     newtodos[index - 1] = temp;

//     return newtodos;
//   });
// };

//   const arrowDown = (index) => {
//   settodos((currentTodos) => {
//     const newtodos = [...currentTodos];

//     if (index === newtodos.length - 1) return currentTodos;

//     const temp = newtodos[index];
//     newtodos[index] = newtodos[index + 1];
//     newtodos[index + 1] = temp;

//     return newtodos;
//   });
// };

// const editTodo = (id) => {
//   for (let i = 0; i < todos.length; i++) {
//     if (todos[i].id === id) {
//       setNewItem(todos[i].task);
//       seteditId(todos[i].id);
//       break;
//     }
//   }
// };

//  if (editId !== null) {
//     settodos((curerrentodos) => {
//       const newEdit = [];
//       let length = 0;
//       for (let i = 0; i < curerrentodos.length; i++) {
//         if (curerrentodos[i].id === editId) {
//           newEdit[length] = { ...curerrentodos[i], task: newItem };
//         } else {
//           newEdit[length] = curerrentodos[i];
//         }
//         length++;
//       }
//       return newEdit;
//     });
//     seteditId(null);
//   } else {

//   const toggleCheck = (id) => {
//   settodos((curerrentodos) => {
//     const updatedTodo = [];
//     let length = 0;
//     for (let i = 0; i < curerrentodos.length; i++) {
//       if (curerrentodos[i].id === id) {
//         updatedTodo[length] = {
//           ...curerrentodos[i],
//           completed: !curerrentodos[i].completed,
//         };
//       } else {
//         updatedTodo[length] = { ...curerrentodos[i] };
//       }
//       length++;
//     }
//     return updatedTodo;
//   });
// };
