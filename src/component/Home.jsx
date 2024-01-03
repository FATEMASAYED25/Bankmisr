import React, { useState, useEffect } from "react";
import { FaArrowsAltH } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";  
import Details from "./Details";


const Home = () => {
  const[symbols,setSymbols]=useState([""]);
  const[fromcurrency,setFromcurrency]=useState("USD");
  const[tocurrency,setTocurrency]=useState("EUR");
  const[amount,setAmount]=useState(0);
  const[convertionresult,setConvertionresult]=useState(0);
  const[convertionrate,setConvertionrate]=useState(0);
  const[convertiontime,setConvertiontime]=useState("");
//get symbols for drobdown list 

  useEffect(()=>{
      axios.get("https://v6.exchangerate-api.com/v6/64f645311446f41b5de65974/latest/USD ")

      .then(response =>{
        const symbols = Object.keys(response.data.conversion_rates);
        setSymbols(symbols);
      })
      .catch(error => { console.log(error)
      })

  },[]);
 


//get the converted amount 

const handlexchange= ()=>{
axios.get(` https://v6.exchangerate-api.com/v6/64f645311446f41b5de65974/pair/${fromcurrency}/${tocurrency}/${amount}`)

.then(response =>{
const convertion = response.data;
console.log(convertion)
setConvertionresult(convertion.conversion_result  );
setConvertionrate(convertion.conversion_rate);
setConvertiontime(convertion.time_last_update_utc)


 
})
.catch(error => { console.log(error)
})

}

  return (
    <div>
      <h1 style={{marginLeft:"7px"}}>Currency Exchanger</h1>
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
                onChange={(e)=>{setAmount(e.target.value)}}
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
                onChange={(e)=>{setFromcurrency(e.target.value)}}
              >
                {symbols.map((symbol,index) => (
                  <option   key={index}  value={symbol}> {symbol}</option>
                ) )}
              
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
                onChange={(e)=>{setTocurrency(e.target.value)}}
              >
                {symbols.map(symbol => 
                  <option  value={symbol}> {symbol}</option>
                 )}
              
              </select>
              </div>
            </div>

            <div className="div4">
              <button 
              style={{ width: "100%", height: "25px" }}
              onClick={handlexchange}
              >
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
                id="convertionrate"
                name="convertionrate"
                value={convertionrate}
              />
           
            </div>
          </div>
          <div className="child last">
            <div className="results">
              <input
                type="number"
                id="convertionresult"
                name="convertionresult"
                value={convertionresult}
              />
            </div>
            <div className="results ">
            <Link to={`/details?symbol=${symbols}&amount=${amount}&fromcurrency=${fromcurrency}
            &tocurrency=${tocurrency}&convertionresult=${convertionresult}&convertionrate=${convertionrate}
            &convertiontime=${convertiontime}
            `}>
              <button style={{ height: "25px" }}>  </button>
            </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
