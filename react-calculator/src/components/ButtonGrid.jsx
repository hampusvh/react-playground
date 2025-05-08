import Button from "./Button";

function ButtonGrid({ onButtonClick }) {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".,",
    "C",
    "+",
    "dummy",
    "=",
  ];
  return (
    <div className="button-grid">
      {buttons.map((value, index) => (
        <Button key={index} value={value} onButtonClick={onButtonClick} />
      ))}
    </div>
  );
}

export default ButtonGrid;
