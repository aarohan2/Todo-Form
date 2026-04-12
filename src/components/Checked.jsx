import { useContext, useState } from "react";
import { TodoContext} from "../TodoContext";

const Checked = ({ todo }) => {
    const {toggleCheck} = useContext(TodoContext);


  //       const toggleCheck = (id) => {
  //       if (todo === false) {
  //         setChecked(true);
  //       } else {
  //           setChecked(false);
  //       }
  //   };

//   console.log(todo.completed);
  return (
    <div className={`${todo.completed ? "checked" : ""} left-item `}>
      <input
        type="checkbox"
        typeof="button"
        onChange={() => {
          toggleCheck(todo.id);
        }}  
         
      />
      {todo.task}{" "}
          <div>
     
    </div>
    </div>
    
  );
};

export default Checked;
