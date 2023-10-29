
import React, {useState} from "react";
import NavBar from "../components/NavBar"

export default function Leaderboard() {
    // const [lost, setLost] = useState(true);
    // const [activeTab, setActiveTab] = useState('lost')

    // const handleLostTabClick = () => {
    //     setLost(true);
    //     setActiveTab('lost')
    return (
        <div>
            <NavBar />
            
            
            <div className="container mx-auto w-3/4 my-8 " style={{minHeight:'100vh'}}>
                <div className="prose float-left">
                        <h2>Most Frequently Lost</h2>
                </div>
                <center>
                    <div className="w-3/4 float-center">
                        <table className="table w-full">
                        <thead>
                            <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th># Instances Lost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                            <th>1</th>
                            <td>AirPod(s)</td>
                            <td>3</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                            <th>2</th>
                            <td>Wallets/Cards</td>
                            <td>3</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                            <th>3</th>
                            <td>Keys/Fobs</td>
                            <td>2</td>
                            </tr>
                            <tr>
                            <th>4</th>
                            <td>Water Bottle</td>
                            {/* <td>Tax Accountant</td> */}
                            <td>1</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </center>

                <div className="h-10 bg-opacity-0"></div>

                <div className="prose float-left">
                        <h2>Most Frequently Found</h2>
                </div>
                <center>
                    <div className="w-3/4 float-center">
                        <table className="table w-full">
                        <thead>
                            <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th># Instances Lost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                            <th>1</th>
                            <td>AirPod(s)</td>
                            <td>3</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                            <th>2</th>
                            <td>Wallets/Cards</td>
                            <td>3</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                            <th>3</th>
                            <td>Keys/Fobs</td>
                            <td>2</td>
                            </tr>
                            <tr>
                            <th>4</th>
                            <td>Water Bottle</td>
                            {/* <td>Tax Accountant</td> */}
                            <td>1</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </center>
            </div>
            
        </div>

    );
}

