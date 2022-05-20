import React, { useState } from 'react'
import { useEffect } from "react";
const SHA256 = require('crypto-js/sha256');


const Pow = () =>{
    useEffect(()=>{
        document.title="Proof of Work";
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    const[data, setData] = useState('hey');
    const[difficulty, setDifficulty] = useState(2);


    let originalHash = SHA256(data).toString();
    let hash = originalHash;
    let leadingZeros = "00"
    if(difficulty>0){
        leadingZeros = Array(difficulty + 1).join("0").toString();
    }
    let nonce = 0;

    while(hash.substring(0, difficulty) !== leadingZeros){
        hash = SHA256(data + nonce).toString();
        nonce++;
    }

    return(
        <div className='Pow'>
            <h1>Proof of work</h1>
            <form onSubmit = {handleSubmit}>
                <label>Difficulty (Number of leading zeros): </label>
                <input
                    type='number'
                    value={difficulty}
                    readOnly
                /> 
                <div className="difficulty">

                    <button onClick={()=>setDifficulty(difficulty+1)}>Increase +</button>

                    <button onClick={()=>setDifficulty(difficulty-1)}>Decrease -</button>
                </div>
                
                

                <label>Data: </label>
                <textarea  cols="30" rows="2" 
                    type="text" 
                    required
                    value = {data}
                    onChange = {(e) => setData(e.target.value)}
                />

                <label>Hash (Data): </label>
                <input 
                    type="text" 
                    required
                    value = {originalHash}
                    readOnly
                />
                <label>Nonce: </label>
                <input 
                    type="text" 
                    required
                    value = {nonce-1}
                    readOnly
                />

                <label>Data + Nonce: </label>
                <input
                    type="text" 
                    required
                    value = {data + (nonce-1)}
                    readOnly
                />

                <label>Final Hash (Data + Nonce): </label>
                <input 
                    type="text" 
                    required
                    value = {hash}
                    readOnly
                />

                
            </form>
        </div>
    )
}
export default Pow;