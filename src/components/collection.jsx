import React, { useContext } from "react";
import TodoContext from "../TodoContext";

const Collection = ({ className = "", children }) => {
  const {setFilter } = useContext(TodoContext);
  return (
    <div className={`collection${className}`}>
      {children}
      <button
        typeof="button" 
        className={`btn filter-btn ${className}`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      <button
        typeof="button"
        className={`btn filter-btn ${className}`}
        onClick={() => setFilter("Active")}
      >
        Active
      </button>
      <button
        typeof="button"
        className={`btn filter-btn ${className}`}
        onClick={() => setFilter("Completed")}
      >
        Completed
      </button>

    </div>
  );
};

export default Collection;
