import React from 'react'
import { useState, useEffect } from "react";
const SHA256 = require('crypto-js/sha256');

const Hash = () =>{
    useEffect(()=>{
        document.title="Hash";
    })

    const[data, setData] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    return(
        <div className='Hash'>
            <h1>SHA-256 Hash Generator</h1>

            <form onSubmit = {handleSubmit}>
                <label>Data: </label>
                <textarea  cols="30" rows="10"
                    type = "text"
                    value = {data}
                    onChange = {(e) => setData(e.target.value)}
                />

                <label>Hash: </label>
                <input 
                    type="text" 
                    required
                    value = {SHA256(data).toString()}
                    readOnly
                />
            </form>
        </div>
    )
}
export default Hash;