import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import HomePage from './components/Homepage';
import Sample from './components/Sample';
import Customer from './components/Customer';
import Invoice from './components/Invoice';


function App() {
 return(
  <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path="/sample" element={<Sample/>} />
        <Route path="/customer" element={<Customer/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path="*" element={() => <h2>404 Not Found </h2>} />
      </Routes>
    </Router>
  </div>
 )
}

export default App;
