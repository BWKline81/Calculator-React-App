import React, { useState, useContext } from "react";
import { Equation } from "./Calculator.jsx";
import { Screen } from "./Calculator.jsx";
import * as math from "mathjs";

function CalcButton(props) {
  let { equation, setEquation } = useContext(Equation);
  let { screen, setScreen } = useContext(Screen);

  function handleClick() {
    if (props.value === "C") {
      setEquation((e) => "");
    } else if (props.value === "=") {
      try {
        setEquation((e) => math.evaluate(e));
      } catch (error) {
        window.reload();
        setEquation((e) => "");
        console.log(equation);
        console.log(error);
      }
    } else if (props.value === "÷") {
      setEquation((e) => e + "/");
    } else if (props.value === "x") {
      setEquation((e) => e + "*");
    } else if (props.value === "R") {
      if (isNaN(equation)) {
        window.alert("You can only round a decimal.");
      } else if (Number.isInteger(equation)) {
        window.alert("You can only round a decimal.");
      } else {
        setEquation((e) => Math.round(e));
      }
    } else if (props.value === "%") {
      if (isNaN(equation)) {
        window.alert("You may only convert NUMBERS to percentages.");
      } else {
        setEquation((e) => e * 0.01);
      }
    } else if (props.value === "2nd") {
      setScreen((s) => "2nd");
    } else if (props.value === "1st") {
      setScreen((s) => "1st");
    } else if (props.value === "x²") {
      setEquation((e) => `(${e})^2`);
    } else if (props.value === "x³") {
      setEquation((e) => `(${e})^3`);
    } else if (props.value === "x^y") {
      let power = window.prompt(
        "What power would you like to raise the equation to?"
      );
      if (isNaN(power) || power === null) {
        return;
      } else {
        setEquation((e) => `(${e})^${power}`);
      }
    } else if (props.value === "π") {
      setEquation((e) => e + "pi");
    } else if (props.value === "e") {
      setEquation((e) => e + "e");
    } else if (props.value === "x!") {
      setEquation((e) => `factorial(${e})`);
    } else if (props.value === "log") {
      setEquation((e) => `log10(${e})`);
    } else if (props.value === "ln") {
      setEquation((e) => `log(${e})`);
    } else if (props.value === "10^x") {
      setEquation((e) => `10^${e}`);
    } else if (props.value === "e^x") {
      setEquation((e) => `e^${e}`);
    } else if (props.value === "sin") {
      setEquation((e) => `sin(${e})`);
    } else if (props.value === "cos") {
      setEquation((e) => `cos(${e})`);
    } else if (props.value === "tan") {
      setEquation((e) => `tan(${e})`);
    } else if (props.value === "√") {
      setEquation((e) => `sqrt(${e})`);
    } else if (props.value === "∛") {
      setEquation((e) => `cbrt(${e})`);
    } else if (props.value === "y√x") {
      let root = window.prompt(
        "What root would you like to raise the equation to?"
      );
      if (isNaN(root) || root === null) {
        return;
      } else {
        setEquation((e) => `nthRoot(${e},${root})`);
      }
    } else {
      setEquation((e) => e + props.value);
    }
  }
  return (
    <button className="calc-button" onClick={handleClick}>
      <p>{props.value}</p>
    </button>
  );
}

export default CalcButton;
