import axios from "axios";
import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min'

export default function CustomerList(){
    const [customers, setCustomers] = useState([]);


    const Customer = props =>{
        const customerData = { 
            firstname:props.customer.firstname,
            lastname: props.customer.lastname,
            phonenumber: props.customer.phonenumber,
            address: props.customer.address,
            companyname: props.customer.companyname,
            email: props.customer.email
        };
        return(
        <tr>
            <td>{props.customer.firstname} {props.customer.lastname}</td>
            <td>{props.customer.phonenumber}</td>
            <td>{props.customer.address}</td>
            <td>{props.customer.companyname}</td>
            <td>{props.customer.email}</td>
            
            <td>
                <Link to={"/editcustomer/"+props.customer.id} state={customerData} onClick={() => window.location.reload()}>Edit Customer Detail</Link>
            </td>
        </tr>
    )}

   

    useEffect(()=>{
        axios.get('http://localhost:4000/customer/')
            .then(res => {
                setCustomers(res.data);
            })
            .catch((err)=>console.log(err));
    })

    const customerList=()=>{
        return customers.map(currentcustomer => {
            return <Customer customer={currentcustomer} key={currentcustomer.id}/>
        })
    }


    return(
        <div className="container">
            <Navbar/>
            <Link to='/customer'>back</Link>
            <h3>Customer List</h3>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Customer Name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>Company Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { customerList() }
                </tbody>
            </table>
        </div>

        
        
    )
}