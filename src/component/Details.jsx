import React, { useState, useEffect } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import { useLocation ,NavLink} from "react-router-dom";
import axios from "axios";

//keep the data the user entered inside cells althought sudden refresh to the browser
const Details = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const symbol = params.get("symbol");
  const amount = params.get("amount");
  const fromcurrency = params.get("fromcurrency");
  const tocurrency = params.get("tocurrency");
  const convertionresult = params.get("convertionresult");
  const convertionrate = params.get("convertionrate");
  const convertiontime = params.get("convertiontime");

  useEffect(() => {
    // Save data to localStorage
    localStorage.setItem("detailsData", JSON.stringify({
      symbol,
      amount,
      fromcurrency,
      tocurrency,
      convertionresult,
      convertionrate,
      convertiontime
    }));
  }, [symbol, amount, fromcurrency, tocurrency, convertionresult, convertionrate, convertiontime]);

  
  return (
    <div>
    <h1 style={{marginLeft:"7px"}}>Details</h1>
   <NavLink to="/" >
   <button style={{ height: "25px" }}>Back To Home </button>
    </NavLink>

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
              placeholder={amount}
           
             
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
                name="fromCurrency"
               
              >
               
                  <option value={fromcurrency}> {fromcurrency}</option>
               
              
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
                name="toCurrency"
               
              >
               
                  <option  value={tocurrency}> {tocurrency}</option>
                
              
              </select>
            </div>
          </div>

      
        </div>
      </div>

      <div className="result-container">
        <div className="child">
          <div className="results">
            <input
              type="number"
              id="convertionrate"
              name="convertionrate"
              placeholder={convertionrate}
            />
          </div>
        </div>
        <div className="child last">
          <div className="results">
            <input
              type="number"
              id="convertionresult"
              name="convertionresult"
              placeholder={convertionresult}
             
            />
          </div>
          <div className="results ">
            Date: {convertiontime}
         
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Details;
