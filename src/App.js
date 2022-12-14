import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import HomePage from './components/Homepage';
import Sample from './components/Sample';
import Customer from './components/Customer';
import Invoice from './components/Invoice';
import AddCustomer from './components/AddCustomer';
import CustomerList from './components/CustomerList';
import SampleList from './components/SampleList';
import AddSample from './components/AddSample';
import EditCustomer from './components/EditCustomer';
import EditSample from './components/EditSample';
import EditInvoice from './components/EditInvoice';


function App() {
 return(
  <div className='container'>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/Home' element={<HomePage/>}/>
        <Route path="/sample" element={<Sample/>} />
        <Route path="/customer" element={<Customer/>}/>
        <Route path='/invoice/:id' element={<Invoice/>}/>
        <Route path='/addcustomer' element={<AddCustomer/>}/>
        <Route path='/customerlist' element={<CustomerList/>}/> 
        <Route path='/samplelist' element={<SampleList/>}/>
        <Route path='/addsample' element={<AddSample/>}/>
        <Route path="/editcustomer/:id" element={<EditCustomer/>}/>
        <Route path="/editsample/:id" element={<EditSample/>}/>
        <Route path='/editinvoice/:id' element={<EditInvoice/>}/>
        <Route path="*" element={() => <h2>404 Not Found </h2>} />
      </Routes>
    </Router>
  </div>
 )
}

export default App;
