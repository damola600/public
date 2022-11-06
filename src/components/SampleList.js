import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


export default function SampleList(){
    const [samples, setSamples] = useState([]);

    const Sample = props =>{
        const id = props.sample.certno
        return(
        <tr>
            <td>{props.sample.samplename}</td>
            <td>{props.sample.labno}</td>
            <td>{props.sample.certno}</td>
            <td>{props.sample.datereceived}</td>
            <td>{props.sample.custname}</td>
            <td>{props.sample.batchno}</td>
            <td>{props.sample.proddate}</td>
            <td>{props.sample.expdate}</td>
            <td>
                <Link to={"/editsample/"+id} onClick={() => window.location.reload()}>Edit Sample</Link>
            </td>
            <td>
                <Link to={"/invoice/"+id} onClick={() => window.location.reload()}>Create Invoice</Link>
            </td>
            
        </tr>
    )}

    useEffect(()=>{
        axios.get('http://localhost:4000/sample/')
            .then(res => {
                setSamples(res.data);
            })
            .catch((err)=>console.log(err)); 
    })

    const sampleList=()=>{
        return samples.map(currentsample => {
            return <Sample sample={currentsample} key={currentsample.certno}/>
        })
    }

    return(
        <div className="container">
            <Navbar/>
            <h3>Sample List</h3>
            <Link to='/sample'>back</Link>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Sample Name</th>
                        <th>Lab No.</th>
                        <th>Cert No.</th>
                        <th>Date Received</th>
                        <th>Customer Name</th>
                        <th>Batch No.</th>
                        <th>Production Date</th>
                        <th>Expiry Date</th>
                    </tr>
                </thead>
                <tbody>
                    { sampleList() }
                </tbody>
            </table>
        </div>
    )
}