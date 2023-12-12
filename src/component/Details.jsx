import React, { useState, useEffect } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import axios from "axios";

const fromCurrencyOptions = [
  "Select fromCurrency", // initial default option
  "USD",
  "GBP",
  "CAD",
  "INR",
  "Other",
];

const toCurrencyOptions = [
  "Select fromCurrency", // initial default option
  "USD",
  "GBP",
  "CAD",
  "INR",
  "Other",
];

const Details = () => {
  const [amount, setAmount] = useState(1);
  const [selectedfromCurrency, setSelectedfromCurrency] = useState("USD");
  const [selectedtoCurrency, setSelectedtoCurrency] = useState("GBP");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${selectedfromCurrency}`
        );
        const rates = response.data.rates;
        const rate = rates[selectedtoCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [selectedfromCurrency, selectedtoCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted.toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handlefromCurrencyChange = (event) => {
    setSelectedfromCurrency(event.target.value);
  };

  const handletoCurrencyChange = (event) => {
    setSelectedtoCurrency(event.target.value);
  };

  return (
    <div>
        <div style={{display:'flex'}}>
        <h1 style={{flex:1}}>Eur- European union Ero </h1>
        <button style={{width:'100%' , height:'25px', flex:1}}><a href='/'> back to home</a></button>

        </div>
      <div className="container1">
        <div className="process-container">
          <div className="child">
            <div style={{ display: "block" }}>
              <label htmlFor="amount">Amount</label>
              <br />
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={handleAmountChange}
              />
              <br />
            </div>
          </div>

          <div className="child important">
            <div style={{ display: "flex", flex: 1 }}>
              <div className="div1">
                <label htmlFor="fromCurrency">from:</label>
                <br />
                <select
                  id="fromCurrency"
                  value={selectedfromCurrency}
                  onChange={handlefromCurrencyChange}
                >
                  {fromCurrencyOptions.map((fromCurrency, index) => (
                    <option key={index} value={fromCurrency}>
                      {fromCurrency}
                    </option>
                  ))}
                </select>
              </div>

              <div className="div2 arrow">
                <FaArrowsAltH />
              </div>
              <div className="div3">
                <label htmlFor="toCurrency">to:</label>
                <br />
                <select
                  id="toCurrency"
                  value={selectedtoCurrency}
                  onChange={handletoCurrencyChange}
                >
                  {toCurrencyOptions.map((toCurrency, index) => (
                    <option key={index} value={toCurrency}>
                      {toCurrency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="div4">
              <button style={{ width: "100%", height: "25px" }}>
                Convert
              </button>
            </div>
          </div>
        </div>

        <div className="result-container">
          <div className="child">
            <div className="results">
              <input
                type="number"
                id="amount"
                name="amount"
                value={convertedAmount}
              />
            </div>
          </div>
          <div className="child">
            <div className="results">
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder={`${convertedAmount} ${selectedtoCurrency}`}
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
