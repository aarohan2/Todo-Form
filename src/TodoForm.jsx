import { useContext } from "react";
import React from "react";
import { TodoContext } from "./TodoContext";
import { Button } from "./components/Button";
import Input from "./components/Input";

const TodoForm = () => {
  const { handleSubmit,newItem,setNewItem } = useContext(TodoContext);
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="heading">My Tasks</div>
      <p className="sec-heading">Manage Your daily tasks.</p>
      <div className="sec-container">
        <Input placeholder={"Add your Todos"} disabled={false} value={newItem} onChange={(e) =>setNewItem(e.target.value)} ></Input>
        <Button type={"submit"} > + Add Tasks </Button>
      </div>
      
    </form>
  );
};

export default TodoForm;
