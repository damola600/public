import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";
import axios from 'axios';

export default function AddSample(){
    const [sampleName, setSampleName] = useState('');
    const [labno, setlabno] = useState('');
    const [certno, setcertno] = useState('');
    const [dateReceived, setDateReceived] = useState(new Date());
    const [batchno, setBatchno] = useState('');
    const [prodDate, setProdDate] = useState(new Date());
    const [expDate, setExpDate] = useState(new Date());
    const [custName, setCustName] = useState('');
    const [customers, setCustomers] = useState([]);

    const submit=(e)=>{
        e.preventDefault();
        const sample = {
            certno: certno,
            labno: labno,
            samplename: sampleName,
            datereceived: dateReceived,
            batchno: batchno,
            proddate: prodDate,
            expdate: expDate,
            custname: custName
        };

        localStorage.setItem('token-info', JSON.stringify(sample));

        axios.post("http://localhost:4000/sample/add", sample)
            .then(res => console.log(res.data))
            .catch((err)=>console.log(err));

        setBatchno('');
        setCustName('');
        setDateReceived('');
        setExpDate('');
        setProdDate('');
        setSampleName('');
        setcertno('');
        setlabno('');

        window.location = "/samplelist";
    }

    const back = () =>{
        window.location = "/sample";
    }

    

    useEffect(()=>{
        axios.get('http://localhost:4000/customer/')
            .then(res =>{
                setCustomers(res.data.map(customer=>customer.firstname))
            })
            .catch((err)=>{
                console.log(err);
            }
        )

        
    })

    return(
        <div>
        <Navbar/>
            <h3>Add a new Sample</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Sample Name</label>
                    <input type='text' className='form-control' value={sampleName} onChange={(e)=>setSampleName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Customer Name</label>
                    <select useref='userInput' className="form-control" value={custName} onChange={(e)=>setCustName(e.target.value)}>
                        <option>Select Customer</option>
                        <option>customer 1</option>
                        {customers.map((customer)=>{
                            return<option key={customer} value={customer}>{customer}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label>Cert No:</label>
                    <input type='text' className="form-control" value={certno} onChange={(e)=>setcertno(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Date Received:</label>
                    <DatePicker className="form-control" selected={dateReceived} onChange={(e)=>setDateReceived(e.target.value)}/> 
                </div>

                <div className="form-group">
                    <label>Lab No:</label>
                    <input type='text' className="form-control" value={labno} onChange={(e)=>setlabno(e.target.value)}/>
                </div>

                

                <div className="form-group">
                    <label>Batch No:</label>
                    <input type='text' className="form-control" value={batchno} onChange={(e)=>setBatchno(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Production Date:</label>
                    <DatePicker className="form-control" selected={prodDate} onChange={(e)=>setProdDate(e.target.value)}/> 
                </div>

                <div className="form-group">
                    <label>Expiry Date:</label>
                    <DatePicker className="form-control" selected={expDate} onChange={(e)=>setExpDate(e.target.value)}/> 
                </div>
                <br/>

                <div className="form-group d-grid gap-2 d-md-flex justify-content-md-center">
                    <input className="btn btn-danger btn-lg" type="submit"  value="Back" onClick={back}/>
                    <input className="btn btn-success btn-lg" type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}