import { useContext } from "react";
import React from "react";
import { TodoContext } from "./TodoContext";
import { Button } from "./components/Button";

const TodoForm = () => {
  const { handleSubmit, setNewItem, newItem,  } = useContext(TodoContext);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="heading">My Tasks</div>
      <p className="sec-heading">Manage Your daily tasks.</p>
      <div className="sec-container">
        <input
          className="input"
          placeholder="Add your Todos"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button type={"submit"} > + Add Tasks </Button>
      </div>
      
    </form>
  );
};

export default TodoForm;
