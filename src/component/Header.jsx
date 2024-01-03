import React from 'react';
import logo from "./imges/bankmisr.png";  
import { FaAlignJustify } from "react-icons/fa";

const Header = () => {
  return (
    <div>
        
    <nav>
        <div className="logo">
            <img src={logo} alt="SAI LOGO" />
        </div>

        <label htmlFor="btn" className="icon"><span><FaAlignJustify /></span></label>
        <input id="btn" type="checkbox" />

        <ul>
            <li><a className="padding" href="/Details">EUR-USDDetails </a></li>
            <li><a className="padding" href="/Details">EUR-GBP Details”</a></li>

          </ul>

    </nav>
      
    </div>
  )
}

export default Header
