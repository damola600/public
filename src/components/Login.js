import React, { useState } from 'react';
import HomePage from './Homepage';

export default function Login(props){
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        console.log(employeeId, password);
        const employee = {
            employeeId,
            password
        };

        localStorage.setItem('token-info', JSON.stringify(employee));
        setIsLoggedIn(true);
        setEmployeeId('');
        setPassword('');

    };

    const logout = ()=>{
        localStorage.removeItem('token-info');
        setIsLoggedIn(false);
        window.location = '/Login';
    };

    return(
        <div>
             
             {!isLoggedIn ? (
                <>
                    <h1>Login</h1>
                    <form onSubmit={submit}>
                        <div className='form-group'>
                            <label>Employee ID: </label>
                            <input type='text' className='form-control' onChange={(e)=>setEmployeeId(e.target.value)} value={employeeId} required/>
                        </div>
                        
                        <div className='form-group'>
                            <label>Password: </label>
                            <input type='password' className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
                        </div>

                        <div className='form-group'>
                            <input type='submit' className='form-control' value="Login"/>
                        </div>
                    </form>
                </>
             ):(
                <>
                    <HomePage/>
                </>
             )}
             
        </div>
    )
}