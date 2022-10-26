import React, {useState} from "react";
import Navbar from "./Navbar";
import Customer from "./Customer";

export default function AddCustomer(){
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [companyname, setcompanyname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [address, setaddress] = useState('');

    const submit = (e) =>{
        e.preventDefault();
        const customer ={
            custname: firstname+' '+lastname,
            email: email,
            phonenumber: phonenumber,
            address: address,
            companyname: companyname
        };

        localStorage.setItem('token-info', JSON.stringify(customer));
        setfirstname('');
        setlastname('');
        setaddress('');
        setcompanyname('');
        setemail('');
        setphonenumber('');
        window.location = '/customer';
    }
    return(
        <div className="container">
            <Navbar/>
            <h3>Add New Customer</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>First Name: </label>
                    <input type="text" className='form-control' value={firstname} onChange={(e)=>setfirstname(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Last Name: </label>
                    <input type="text" className='form-control' value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Address: </label>
                    <input type="text" className='form-control' value={address} onChange={(e)=>setaddress(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Company Name: </label>
                    <input type="text" className='form-control' value={companyname} onChange={(e)=>setcompanyname(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" className='form-control' value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Phone Number: </label>
                    <input type="number" className='form-control' value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)}/>
                </div>
                <br/>

                <div className="form-group d-grid gap-2 d-md-flex justify-content-md-center">
                    <input className="btn btn-danger btn-lg" type="submit"  value="Back" onClick={<Customer/>}/>
                    <input className="btn btn-success btn-lg" type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}