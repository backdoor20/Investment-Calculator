import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment.js";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChangeUserInput(inputIdentifier, newValue) {
    setUserInput((userInput) => {
      return { ...userInput, [inputIdentifier]: +newValue };
    });
  }

  const validInput = userInput.duration > 0;
  return (
    <>
      <Header />
      <UserInput
        input={userInput}
        handleChangeUserInput={handleChangeUserInput}
      />
      {!validInput && (
        <p className="center">Please enter duration greater than 0.</p>
      )}
      {validInput && <Result input={userInput} />}
    </>
  );
}

export default App;
