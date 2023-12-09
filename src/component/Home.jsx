import React, { useState, useEffect } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import axios from "axios";

const fromCurrencyOptions = [
  "Select fromCurrency", // Add an initial default option
  "USD",
  "GBP",
  "CAD",
  "INR",
  "Other",
];

const toCurrencyOptions = [
  "Select fromCurrency", // Add an initial default option
  "USD",
  "GBP",
  "CAD",
  "INR",
  "Other",
];

const Home = () => {
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
      <h1>Currency Exchanger</h1>
      <div className="container1">
        <div class="process-container">
          <div class="child">
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

          <div class="child important">
            <div style={{ display: "flex", flex: 1 }}>
              <div class="div1">
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

              <div className="div2">
                <FaArrowsAltH />
              </div>
              <div class="div3">
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

            <div class="div4">
              <button style={{ width: "100%", height: "25px" }}>
                Convert
              </button>
            </div>
          </div>
        </div>

        <div class="result-container">
          <div className="child">
            <div class="results">
              <input
                type="number"
                id="amount"
                name="amount"
                value={convertedAmount}
              />
            </div>
          </div>
          <div className="child">
            <div class="results">
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder={`xxxx ${selectedtoCurrency}`}
              />
            </div>
            <div class="results">
              <button style={{ width: "50%", height: "25px" }}>
                <a href="/Details">Details</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;