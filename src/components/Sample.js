import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Sample(){
    return(
        <div className='container'>
            <Navbar />
            <br/>
            <div className='d-grid gap-10 ' role='group' aria-label='Customer buttons'>
                <Link to='/addsample' type='button' className='btn btn-primary btn-lg'>Add Sample</Link><br/>
                <Link to='/samplelist' type='button' className='btn btn-primary btn-lg'>Samples</Link><br/>
                <Link to='/Home' type='button' className='btn btn-danger btn-lg'>Back</Link>
            </div>
        </div>
    )
}