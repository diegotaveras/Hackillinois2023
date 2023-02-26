
import React from "react"
import logo from './logo.svg';
import './App.css';
import {useState, useEffect, useCallback} from "react"
import SearchBar from "./searchbar.js"
import RegisterForm from "./authform";

import { BrowserRouter, Route, HashRouter, Switch, Routes} from "react-router-dom"

function App() {
  
  return(

    
  
  <div className="results">
    <BrowserRouter>
      <Routes>
        <Route path="" element={<SearchBar/>} />
        <Route path="register" element={<RegisterForm/>} />
        {/* <Route path="register" element={<RegisterForm/>} /> */}


      </Routes>
      
    
    </BrowserRouter>
    
    
    

  </div>
  
  
  
  
  )
}

export default App;
