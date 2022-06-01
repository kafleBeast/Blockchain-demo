import React from 'react'
import { useState, useEffect } from "react";
const SHA256 = require('crypto-js/sha256');

const Blocks = () =>{
    useEffect(()=>{
        document.title="Blocks";
    })
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const[difficulty, setDifficulty] = useState(2);
    const[data1, setData1] = useState('hello');
    const[data2, setData2] = useState('hi');
    const[data3, setData3] = useState('sup');
    const[data4, setData4] = useState('hey');
    const[data5, setData5] = useState('yo');
    const[data6, setData6] = useState('hiyah');


    let leadingZeros = Array(difficulty + 1).join("0").toString();
    let allData = [data1, data2, data3, data4, data5, data6];
    let hash = [];

    

    for(let i=0;i<6;i++){
        hash.push(SHA256(allData[i]).toString());
    }
    let prevHash1 = Array(64 + 1).join("0").toString();
    const[prevHash2, setPrevHash2] = useState('');
    const[prevHash3, setPrevHash3] = useState('');
    const[prevHash4, setPrevHash4] = useState('');
    const[prevHash5, setPrevHash5] = useState('');
    const[prevHash6, setPrevHash6] = useState('');

    let prevHashes = [prevHash1, prevHash2, prevHash3, prevHash4, prevHash5, prevHash6];
    let isValid = ['Yes', '', '', '', '', ''];

    let nonce = [0,0,0,0,0,0];

    const getNonce = (data, prevHash, hash, leadingZeros) =>{
        let nonse = 0;

        while(hash.substring(0, difficulty) !== leadingZeros){
            hash = SHA256(data + prevHash + nonse).toString();
            nonse++;
        }
        return nonse - 1;
    }
    
    const getHashFromNonce = (data, prevHash, nonce) =>{
        return SHA256(data + prevHash + nonce).toString();
    }

    for(let i=0;i<6;i++){
        nonce[i] = getNonce(allData[i], prevHashes[i], hash[i], leadingZeros);
        hash[i] = SHA256(allData[i] + prevHashes[i] + nonce[i]).toString();
    }

    for(let i=1;i<6;i++){
        if(hash[i-1] === prevHashes[i]){
            isValid[i] = 'Yes';
        }else{
            isValid[i] = 'No';
        }
    }

    for(let i=1;i<6;i++){
        if(isValid[i]==='No'){
            isValid[i+1] = 'No';
        }
    }

    return(
        <div className='Blocks'>
            <h1>Chain of Blocks</h1>
            <div className="difficulty" >
                <form onSubmit = {handleSubmit}>
                    <label>Difficulty (Number of leading zeros): </label>
                    <div className="diffButton">
                        <input
                            type='number'
                            value={difficulty}
                            readOnly
                        />
                        <button onClick={()=>difficulty <3 && setDifficulty(difficulty+1)}>+</button>
                        <button onClick={()=>difficulty >1 && setDifficulty(difficulty-1)}>-</button>
                    </div>
                    
                </form>
            </div>
            
            <div className= "blockchain" >
                <div className="col-md-4 block-elements" id={isValid[0]}>
                    <h3>Block 1 (Genesis)</h3>
                    <form onSubmit = {handleSubmit}>
                        <label>Previous Hash: </label>
                        <input 
                            type="text"
                            required
                            value={prevHash1}
                            readOnly 
                        />

                        <label>Data: </label>
                        <input 
                            type="text"
                            required
                            value={data1}
                            onChange = {(e) => setData1(e.target.value)} 
                        />
                        
                        <label>Nonce: </label>
                        <input 
                            type="text"
                            required
                            value={nonce[0]}
                            readOnly
                        />

                        <label>Hash (Data + prevHash + Nonce): </label>
                        <input 
                            type="text"
                            required
                            value={hash[0]}
                            readOnly
                        />

                        <label>Is Valid?</label>
                        <input 
                            type="text"
                            required 
                            value = {isValid[0]}
                            readOnly
                        />
                        <button className="mine">Mine</button>

                    </form>
                </div>

                <div className="col-md-4 block-elements" id={isValid[1]}>
                <h3>Block 2 </h3>
                    <form onSubmit = {handleSubmit}>
                        <label>Previous Hash: </label>
                        <input 
                            type="text"
                            required
                            value={prevHash2}
                            readOnly 
                        />

                        <label>Data: </label>
                        <input 
                            type="text"
                            required
                            value={data2}
                            onChange = {(e) => setData2(e.target.value)} 
                        />
                        
                        <label>Nonce: </label>
                        <input 
                            type="text"
                            required
                            value={nonce[1]}
                            readOnly
                        />

                        <label>Hash(Data + prevHash + Nonce): </label>
                        <input 
                            type="text"
                            required
                            value={hash[1]}
                            readOnly
                        />
                        <label>Is Valid?</label>
                        <input 
                            type="text"
                            required 
                            value = {isValid[1]}
                            readOnly
                        />

                        <button className="mine" onClick={()=>setPrevHash2(getHashFromNonce(data1, prevHash1, nonce[0]))}>Mine</button>
                    </form>
                </div>

                <div className="col-md-4 block-elements" id={isValid[2]}>
                <h3>Block 3</h3>
                    <form onSubmit = {handleSubmit}>
                        <label>Previous Hash: </label>
                        <input 
                            type="text"
                            required
                            value={prevHash3}
                            readOnly 
                        />

                        <label>Data: </label>
                        <input 
                            type="text"
                            required
                            value={data3}
                            onChange = {(e) => setData3(e.target.value)} 
                        />
                        
                        <label>Nonce: </label>
                        <input 
                            type="text"
                            required
                            value={nonce[2]}
                            readOnly
                        />

                        <label>Hash(Data + prevHash + Nonce): </label>
                        <input 
                            type="text"
                            required
                            value={hash[2]}
                            readOnly
                        />
                        <label>Is Valid?</label>
                        <input 
                            type="text"
                            required 
                            value = {isValid[2]}
                            readOnly
                        />

                        <button className="mine" onClick={()=>setPrevHash3(getHashFromNonce(data2, prevHash2, nonce[1]))}>Mine</button>
                    </form>
                </div>
 
                <div className="col-md-4 block-elements" id={isValid[3]}>
                <h3>Block 4</h3>
                    <form onSubmit = {handleSubmit}>
                        <label>Previous Hash: </label>
                        <input 
                            type="text"
                            required
                            value={prevHash4}
                            readOnly 
                        />

                        <label>Data: </label>
                        <input 
                            type="text"
                            required
                            value={data4}
                            onChange = {(e) => setData4(e.target.value)} 
                        />
                        
                        <label>Nonce: </label>
                        <input 
                            type="text"
                            required
                            value={nonce[3]}
                            readOnly
                        />

                        <label>Hash(Data + prevHash + Nonce): </label>
                        <input 
                            type="text"
                            required
                            value={hash[3]}
                            readOnly
                        />
                        <label>Is Valid?</label>
                        <input 
                            type="text"
                            required 
                            value = {isValid[3]}
                            readOnly
                        />

                        <button className="mine" onClick={()=>setPrevHash4(getHashFromNonce(data3, prevHash3, nonce[2]))}>Mine</button>
                    </form>
                </div>
                
                <div className="col-md-4 block-elements" id={isValid[4]}>
                <h3>Block 5</h3>
                    <form onSubmit = {handleSubmit}>
                        <label>Previous Hash: </label>
                        <input 
                            type="text"
                            required
                            value={prevHash5}
                            readOnly 
                        />

                        <label>Data: </label>
                        <input 
                            type="text"
                            required
                            value={data5}
                            onChange = {(e) => setData5(e.target.value)} 
                        />
                        
                        <label>Nonce: </label>
                        <input 
                            type="text"
                            required
                            value={nonce[4]}
                            readOnly
                        />

                        <label>Hash(Data + prevHash + Nonce): </label>
                        <input 
                            type="text"
                            required
                            value={hash[4]}
                            readOnly
                        />
                        <label>Is Valid?</label>
                        <input 
                            type="text"
                            required 
                            value = {isValid[4]}
                            readOnly
                        />

                        <button className="mine" onClick={()=>setPrevHash5(getHashFromNonce(data4, prevHash4, nonce[3]))}>Mine</button>
                    </form>
                </div>

                <div className="col-md-4 block-elements" id={isValid[5]}>
                <h3>Block 6</h3>
                    <form onSubmit = {handleSubmit}>
                        <label>Previous Hash: </label>
                        <input 
                            type="text"
                            required
                            value={prevHash6}
                            readOnly 
                        />

                        <label>Data: </label>
                        <input 
                            type="text"
                            required
                            value={data6}
                            onChange = {(e) => setData6(e.target.value)} 
                        />
                        
                        <label>Nonce: </label>
                        <input 
                            type="text"
                            required
                            value={nonce[5]}
                            readOnly
                        />

                        <label>Hash(Data + prevHash + Nonce): </label>
                        <input 
                            type="text"
                            required
                            value={hash[5]}
                            readOnly
                        />
                        <label>Is Valid?</label>
                        <input 
                            type="text"
                            required 
                            value = {isValid[5]}
                            readOnly
                        />

                        <button className="mine" onClick={()=>setPrevHash6(getHashFromNonce(data5, prevHash5, nonce[4]))}>Mine</button>
                    </form>
                </div> 
            </div>
        </div>
    )
}
export default Blocks;
