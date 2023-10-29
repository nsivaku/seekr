
import React, {useState} from "react";
import NavBar from "../components/NavBar"
import {storage} from '../firebase-config'


export default function Leaderboard() {
    const [lost, setLost] = useState(true);
    const [activeTab, setActiveTab] = useState('lost')
    const [lostClass, setLostClass] = useState('btn btn-active')
    const [foundClass, setFoundClass] = useState('btn')

    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4" style={{marginTop:"40px", minHeight:"100vh"}}>
                <div className="prose">
                    <h2>Submit an Item</h2>
                    <h4>Type</h4>
                    <div className="btn btn-group" style={{padding:"0", margin:"0"}}>
                        <a className={lostClass} onClick={() => {setLost(true); setLostClass('btn btn-active'); setFoundClass('btn')}}>Lost</a> 
                        <a className={foundClass} onClick={() => {setLost(false); setLostClass('btn'); setFoundClass('btn btn-active')}}>Found</a>
                    </div>
                    <h4>Name of Item</h4>
                    <input type="text" placeholder="Airpods, wallet, keys, etc." className="input input-bordered input-primary w-full max-w-xs" />

                    <h4>Location</h4>
                    <input type="text" placeholder="Fetzer Gym 105, Hamilton 101, etc." className="input input-bordered input-primary w-full max-w-xs" />
                
                    <h4>Image Upload</h4>
                    <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                    <br/>
                    <br/>
                    <button className="btn btn-secondary">Submit</button>
                </div>
            </div>
        </div>
    );
}

