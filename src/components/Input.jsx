import React, { useContext } from "react";
import TodoContext from "../TodoContext";

const Input = ({ className = "" }) => {
  const { setNewItem, newItem } = useContext(TodoContext);
  return (
    <>
      <input
        className={`input ${className}`}
        placeholder="Add your Todos"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
    </>
  );
};

export default Input;
