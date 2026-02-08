import React, { useState, createContext } from "react";
import CalcButton from "./Calc-Button.jsx";
import CalcDisplay from "./Calc-Display.jsx";

export let Equation = createContext();
export let Screen = createContext();
export let Output = createContext();

function Calculator() {
  let [equation, setEquation] = useState("");
  let [screen, setScreen] = useState("1st");
  let [output, setOutput] = useState("");

  const equationContext = { equation, setEquation };
  const screenContext = { screen, setScreen };
  const outputContext = { output, setOutput };

  if (screen === "1st") {
    return (
      <>
        <Equation.Provider value={equationContext}>
          <Output.Provider value={outputContext}>
            <Screen.Provider value={screenContext}>
              <div className="calculator-base">
                <CalcDisplay />
                <CalcButton value="C" />
                <CalcButton value="2nd" />
                <CalcButton value="R" />
                <CalcButton value="%" />

                <CalcButton value="7" />
                <CalcButton value="8" />
                <CalcButton value="9" />
                <CalcButton value="÷" />

                <CalcButton value="4" />
                <CalcButton value="5" />
                <CalcButton value="6" />
                <CalcButton value="x" />

                <CalcButton value="1" />
                <CalcButton value="2" />
                <CalcButton value="3" />
                <CalcButton value="-" />

                <CalcButton value="0" />
                <CalcButton value="." />
                <CalcButton value="=" />
                <CalcButton value="+" />
              </div>
            </Screen.Provider>
          </Output.Provider>
        </Equation.Provider>
      </>
    );
  } else if (screen === "2nd") {
    return (
      <>
        <Equation.Provider value={equationContext}>
          <Output.Provider value={outputContext}>
            <Screen.Provider value={screenContext}>
              <div className="calculator-base">
                <CalcDisplay />
                <CalcButton value="C"></CalcButton>
                <CalcButton value="1st"></CalcButton>
                <CalcButton value="("></CalcButton>
                <CalcButton value=")"></CalcButton>

                <CalcButton value="x²"></CalcButton>
                <CalcButton value="x³"></CalcButton>
                <CalcButton value="x^y"></CalcButton>
                <CalcButton value="π"></CalcButton>

                <CalcButton value="sin"></CalcButton>
                <CalcButton value="cos"></CalcButton>
                <CalcButton value="tan"></CalcButton>
                <CalcButton value="e"></CalcButton>

                <CalcButton value="√"></CalcButton>
                <CalcButton value="∛"></CalcButton>
                <CalcButton value="y√x"></CalcButton>
                <CalcButton value="x!"></CalcButton>

                <CalcButton value="log"></CalcButton>
                <CalcButton value="ln"></CalcButton>
                <CalcButton value="10^x"></CalcButton>
                <CalcButton value="e^x"></CalcButton>
              </div>
            </Screen.Provider>
          </Output.Provider>
        </Equation.Provider>
      </>
    );
  }
}

export default Calculator;
