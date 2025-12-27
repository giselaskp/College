import { useState } from "react";
import './calculator.css';

function Calculator() {
  const [input, setInput] = useState("");

  // Tambahkan fungsi helper
  const handleClick = (value) => {
    setInput(prev => prev + value);
  };

  const handleClear = () => setInput("");

  const handleClearEntry = () => setInput(prev => prev.slice(0, prev.length - 1));

  const handleBackspace = () => setInput(prev => prev.slice(0, -1));

  const handleToggleSign = () => {
    if (input) {
      if (input.startsWith('-')) setInput(input.slice(1));
      else setInput('-' + input);
    }
  };

  const handlePercent = () => {
    try {
      setInput((parseFloat(input)/100).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleReciprocal = () => {
    try {
      setInput((1/parseFloat(input)).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleSquare = () => {
    try {
      setInput((parseFloat(input)**2).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleSqrt = () => {
    try {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    { label: "%", action: handlePercent },
    { label: "CE", action: handleClearEntry },
    { label: "C", action: handleClear },
    { label: "⌫", action: handleBackspace },
    { label: "1/x", action: handleReciprocal },
    { label: "x²", action: handleSquare },
    { label: "√", action: handleSqrt },
    { label: "÷", action: () => handleClick("/") },
    { label: "7", action: () => handleClick("7") },
    { label: "8", action: () => handleClick("8") },
    { label: "9", action: () => handleClick("9") },
    { label: "×", action: () => handleClick("*") },
    { label: "4", action: () => handleClick("4") },
    { label: "5", action: () => handleClick("5") },
    { label: "6", action: () => handleClick("6") },
    { label: "−", action: () => handleClick("-") },
    { label: "1", action: () => handleClick("1") },
    { label: "2", action: () => handleClick("2") },
    { label: "3", action: () => handleClick("3") },
    { label: "+", action: () => handleClick("+") },
    { label: "±", action: handleToggleSign },
    { label: "0", action: () => handleClick("0") },
    { label: ".", action: () => handleClick(".") },
    { label: "=", action: handleCalculate },
  ];

  return (
    <div className="calculator-card mx-auto p-4 shadow-lg">
      <h2 className="text-center text-white mb-3">Fun Calculator 🎉</h2>
      <input type="text" className="form-control mb-3 text-end display-input" value={input} readOnly />
      <div className="row g-2">
        {buttons.map((btn, idx) => (
          <div key={idx} className="col-3">
            <button 
              className={`btn btn-light w-100 btn-lg animated-btn ${btn.label === "=" ? 'btn-success' : ''}`} 
              onClick={btn.action}
            >
              {btn.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
