import "../App.css";

function Button({ value, onButtonClick }) {
  const className = value === "=" ? "equals" : value === "dummy" ? "dummy" : "";

  return (
    <button
      className={className}
      value={value}
      onClick={() => onButtonClick(value)}
      disabled={value === "dummy"}
    >
      {value === "dummy" ? "" : value}
    </button>
  );
}

export default Button;
