import './App.css';
import {Route ,Routes} from 'react-router-dom';
import { Component } from 'react';
import Home from './component/Home';
import Details from './component/Details';
import Header from './component/Header';
import Footer from './component/Footer';
const App = () => {
  return (
    <div>
       <Header/>
        <Routes>
            <Route path='' element={<Home/>} />
            <Route path='/Details' element={<Details/>} />
         
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
