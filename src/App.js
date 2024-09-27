import "./App.css";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import iconDollar from "./icon-dollar.svg";
import iconPerson from "./icon-person.svg";

const tipOptions = [5, 10, 15, 20, 50];

function App() {
  const [billAmount, setBillAmount] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);
  const [error, setError] = useState(false);

  const tipCalculation = () => {
    let tipDecimal = 0
    if (Number(numOfPeople) > 0) {
      if (customTip) {
        tipDecimal = customTip / 100;
      } else {
        tipDecimal = tipPercentage / 100;
      }
      
      const totalTip = billAmount * tipDecimal;
      const totalAmountWithTip = billAmount + totalTip;

      setTotalPerPerson((totalAmountWithTip / Number(numOfPeople)).toFixed(2));
      setTipPerPerson((totalTip / Number(numOfPeople)).toFixed(2));
      setError(false);
    }
  };

  const handleReset = () => {
    setBillAmount('');
    setCustomTip("");
    setNumOfPeople('');
    setTipPercentage('');
    setTipPerPerson(0);
    setTotalPerPerson(0);
    setError(false);
  };

  useEffect(() => {
    tipCalculation();
  }, [billAmount, numOfPeople, tipPercentage, customTip]);

  useEffect(() => {
    if (numOfPeople.length === 0 || Number(numOfPeople) > 0) {
      setError(false);
    } else if (Number(numOfPeople) === 0) {
      setError(true);
    }
  }, [numOfPeople])
  

  return (
    <div className="body">
      <main>
      <img src={logo} alt="logo" className="logo" />
      <div className="calculator-container">
        <form className="input-container">
          <div className="input-box">
            <label>Bill</label>
            <input
              type="number"
              value={billAmount}
              onChange={(e) => setBillAmount(Number(e.target.value))}
              placeholder="0"
            />
            <img src={iconDollar} alt="icon" className="icon" />
          </div>

          <div className="input-box">
            <label>Select Tip %</label>
            <div className="tip-selection">
              {tipOptions.map((option) => (
                <button
                  key={option}
                  className={`tip-selection-button ${tipPercentage === option ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    setTipPercentage(option);
                    setCustomTip("");
                  }}
                >
                  {option}%
                </button>
              ))}
              <input
                type="number"
                className={`custom-tip-input ${customTip ? "active" : ""}`}
                value={customTip}
                onChange={(e) => {
                  e.preventDefault(); 
                  setCustomTip(Number(e.target.value));
                  setTipPercentage("");
                }}
                placeholder="Custom"
              />
            </div>
          </div>

          <div className="input-box">
            <label>Number of People</label>
            <input
              type="number"
              value={numOfPeople}
              onChange={(e) => {
                setNumOfPeople(e.target.value)
              }}
              placeholder="0"
              className={`input ${error? 'error' : ''}`}
            />
            {error && <span className="error-msg">Can't be zero</span>}
            <img src={iconPerson} alt="icon" className="icon" />
          </div>
        </form>

        <div className="result-container">
          <div className="result-box">
            <div className="result-box-tip">
              <div className="result-title-container">
                <div className="result-title">Tip Amount</div>
                <div className="result-subtitle">/ person</div>
              </div>
              <h1 className="result-amount">
              ${tipPerPerson ? tipPerPerson : '0.00'}
              </h1>
            </div>

            <div className="result-box-total">
              <div className="result-title-container">
                <div className="result-title">Total</div>
                <div className="result-subtitle">/ person</div>
              </div>
              <h1 className="result-amount">
              ${totalPerPerson ? totalPerPerson : '0.00'}
              </h1>
            </div>
          </div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/sherimin">@sherimin</a>.
      </div>
      </main>
    </div>
  );
}

export default App;
