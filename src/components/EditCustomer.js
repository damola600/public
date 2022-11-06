import axios from "axios";
 import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function EditCustomer(){
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [companyname, setcompanyname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphonenumber] = useState('');
    const [address, setaddress] = useState('');
    const { id } = useParams();
    console.log(id);

    

    useEffect(()=>{
        axios.get("http://localhost:4000/customer/find", {params:  {id: id}})
            .then(res =>{
                setfirstname(res.data.firstname);
                setlastname(res.data.lastname);
                setaddress(res.data.address);
                setcompanyname(res.data.companyname);
                setemail(res.data.email);
                setphonenumber(res.data.phonenumber);
            })
            .catch((err)=>console.log(err));
    })

    const update=(e)=>{
        e.preventDefault();
        const customer ={
            id: id,
            firstname: firstname,
            lastname: lastname,
            email: email,
            phonenumber: phonenumber,
            address: address,
            companyname: companyname
        };

        localStorage.setItem('token-info', JSON.stringify(customer));
        axios.post("http://localhost:4000/customer/update", customer)
            .then(res=>console.log(res.data))
            .catch((err)=>console.log(err));
        
        window.location = '/customerlist';
    }

    return(
        
        <div className="container">
            <Navbar/>
            <Link to="/customerlist">Back</Link>
            <form onSubmit={update}>
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
                    <input className="btn btn-success btn-lg" type="submit" value="Update"/>
                </div>
            </form>
              
        </div>
    )
} 