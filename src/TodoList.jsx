import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
// import {  FaCheckCircle } from "react-icons/fa";
import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";

const TodoList = () => {
  const { todos, editTodo, deleteTodo, aarowUp, aarowDown } =
    useContext(TodoContext);
  return (
    <ul type="none">
      {todos.map((todo, index) => {
        return (
          <li key={todo.id} className="list-container">
            <div className="left-item">
              <input type="checkbox" />
              {todo.task}{" "}
            </div>

            <div className="right-item">
              <button
                className="up-btn"
                type="button"
                onClick={() => aarowUp(index)}
              >
                {" "}
                <FontAwesomeIcon icon={faArrowUp} />{" "}
              </button>
              <button
                className="down-btn"
                type="button"
                onClick={() => aarowDown(index)}
              >
                {" "}
                <FontAwesomeIcon icon={faArrowDown} />{" "}
              </button>
              <button
                type="button"
                className="edit-btn"
                onClick={() => editTodo(todo.id)}
              >
                <FontAwesomeIcon icon={faPen} />
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTodo(todo.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
