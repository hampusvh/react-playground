import "../App.css";
import { useState } from "react";
import Display from "./Display";
import ButtonGrid from "./ButtonGrid";

function Calculator() {
  const handleButtonClick = (value) => {
    if (value === "=") {
      setInput(eval(input));
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const allowed = /^[0-9]*$/;
    if (allowed.test(value)) {
      setInput(value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} onChange={handleInputChange} />
      <ButtonGrid onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
