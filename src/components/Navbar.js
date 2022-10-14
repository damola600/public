import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Login from './Login';


export default function Navbar(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const logout = ()=>{
        localStorage.removeItem('token-info');
        setIsLoggedIn(false);
       window.location = '/';
    };
    
    return(
        <div>
            {!isLoggedIn ? 
                (
                    <>
                        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                        <div className='container-fluid'>
                            <Link to='/home' className='navbar-brand'>KAZLAT</Link>
                            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aeia-aria-label='Toggle navigation'>
                                <span className='navbar-toggler-icon'></span>
                            </button>
                            <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                                <div className='navbar-nav'>
                                    <Link to='/sample' className='nav-link active'>Samples</Link>
                                    <Link to='/customer' className='nav-link active'>Customer</Link>
                                    <Link to='/invoice' className='nav-link active'>Invoice</Link>
                                    <button onClick={logout} className='nav-link active bg-dark'>Logout</button>
                                </div>
                            </div>
                        </div>
                    </nav>
        
                    </>
                ):(
                    <>
                        <Login />
                    </>
                )

            }
        </div>
    )
        
}