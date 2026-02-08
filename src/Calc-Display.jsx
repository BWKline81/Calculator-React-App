import React, { useState, useContext } from "react";
import { Equation } from "./Calculator.jsx";

function CalcDisplay() {
  const equationOutput = useContext(Equation);

  return <div className="calc-display">{equationOutput.equation}</div>;
}

export default CalcDisplay;
