export const Button = ({
  className = "",
  children,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      disabled= {disabled}
      onClick={onClick}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
};
