import React, { useContext } from "react";


const Input = ({ className = "", disabled, placeholder,value,onChange  }) => {
  
  return (
    <>
      <input
        className={`input ${className}`}
        disabled ={disabled}
        placeholder={placeholder}
        value={value} 
        onChange={onChange}
      />
    </>
  );
};

export default Input;
