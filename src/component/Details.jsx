import React from 'react'

const Details = () => {
  return (
    <div>
        <div style={{display:'flex'}}>
        <h1 style={{flex:1}}>Eur- European union Ero </h1>
        <button style={{width:'100%' , height:'25px', flex:1}}><a href='#Home'></a></button>

        </div>
    

<div className="container1">

  <div class="process-container">

    <div class="child">
      <div style={{display:"block"}}>
      <label htmlFor="amount">Amount</label>
      <br />
      <input type="number" id="amount" name="amount" />
      <br /></div>
   
    </div>

    <div class="child important">
      <div style={{display:"flex", flex:1}}>
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
          {fromCurrencyOptions.map((fromCurrency, index) => (
            <option key={index} value={fromCurrency}>
              {fromCurrency}
            </option>
          ))}
        </select>
      </div>

      </div>
     

      <div class="div4">
        <button style={{width:'100%' , height:'25px'}}>convert</button>
      </div>
    </div>
  </div>

  <div class="result-container">
      <div className="child">
      <div class="results"><input type="number" id="amount" name="amount" /></div>
      </div>
             <div className="child">
             <div class="results"><input type="number" id="amount" name="amount"  placeholder="xxxx USD"/></div>
             </div>
           


  </div>
  </div>
    </div>
  )
}

export default Details;
