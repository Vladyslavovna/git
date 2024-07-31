import Button from "./Button";
import buttonsData from "../data/calc";
import { useState } from "react";
export default function Calculator() {
  const [display, setDisplay] = useState("");
  //нужна тут функция обработчик нажатия кноки,в которой будут выводися все знаки на экран
  const handleClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDislplay();
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };
  const calculateResult = () => {
    setDisplay(eval(display));
  };
  const clearDislplay = () => {
    setDisplay("");
  };
  return (
    <div>
      <div className="display">{display}</div>
      <div className="buttons">
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            type={button.type}
            value={button.value}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
