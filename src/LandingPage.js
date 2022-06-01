import { useEffect } from "react";
import React from 'react';

const LandingPage = () => {

    useEffect(()=>{
        document.title="Blockchain demo";
    })
    return ( 
        <div className="LandingPage">
            <div className="LandingPage-content">
                <h1>Simple Blockchain Demo</h1>

                <div className="outline">
                    <p className="headers">Contents:</p>
                    <li>Conversion of data to hash using SHA-256 Algorithm</li>
                    <li>Implementation of Proof of Work</li>
                    <li>Chaining of blocks</li>
                </div>
                    
                <div className="tables">
                    <div className="team-members">
                        <p className="headers"> Team members: </p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Grace Cho</th>
                                    <th>Yoonsoo Hur</th>
                                    <th>Abhishek Kafle</th>
                                    <th>Jiwon Lee</th>
                                </tr>
                            </tbody>
                            
                        </table>
                        
                    </div>

                    <div className="instructor">
                        <p className="headers">Course instructor: </p>
                            <table className="instructor-table">
                                <tbody>
                                    <tr>
                                        <th>Professor Suzana Brown</th>
                                    </tr>
                                </tbody>
                                
                            </table>
                    </div>

                </div>
                

            </div>
        </div>
     );
}
 
export default LandingPage;
