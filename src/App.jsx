import Result from "./components/Result/Result.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import styles from "./App.module.scss";
import React, { useState } from "react";

function App() {
  const [firstValue, setFirstValue] = useState("0");
  const [secondValue, setSecondValue] = useState("0");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("0");

  const buttonClick = (value) => {
    if (value === "AC") {
      setFirstValue("0");
      setSecondValue("0");
      setOperator("");
      setResult("0");
    } else if (!isNaN(value)) {
      if (operator === "") {
        setFirstValue(firstValue === "0" ? value : firstValue + value);
        setResult(firstValue === "0" ? value : firstValue + value);
      } else {
        setSecondValue(secondValue === "0" ? value : secondValue + value);
        setResult(secondValue === "0" ? value : secondValue + value);
      }
    } else if (value === "=") {
      const num1 = parseFloat(firstValue);
      const num2 = parseFloat(secondValue);
      switch (operator) {
        case "+":
          setResult(num1 + num2);

          break;
        case "-":
          setResult(num1 - num2);

          break;
        case "*":
          setResult(num1 * num2);

          break;
        case "/":
          setResult(num1 / num2);
          
          break;
        default:
          setResult("0");
          break;
      }
    } else {
      setOperator(value);
      setResult(value);
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Result resultValue={result} />
        <Buttons onButtonClick={buttonClick} />
      </div>
    </div>
  );
}

export default App;
