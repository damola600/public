import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
export default function Customer(){
    return(
        <div className='container'>
            <Navbar />
            <br/>
            <div className='d-grid gap-10 ' role='group' aria-label='Customer buttons'>
                <Link to='/addcustomer' type='button' className='btn btn-primary btn-lg'>Add Customer</Link><br/>
                <Link to='/customerlist' type='button' className='btn btn-primary btn-lg'>Customers</Link><br/>
                <Link to='/Home' type='button' className='btn btn-danger btn-lg'>Back</Link>
            </div>

        </div>
    )
}