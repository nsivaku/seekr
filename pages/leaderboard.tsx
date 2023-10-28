
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
            <div>
                <h1>Most Frequently Lost</h1>
            </div>
            <div>
                <table className="table table-zebra">
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
                    <td>16</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                    <th>2</th>
                    <td>Keys/Fobs</td>
                    <td>12</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                    <th>3</th>
                    <td>Water Bottles</td>
                    <td>11</td>
                    </tr>
                    <tr>
                    <th>4</th>
                    <td>Wallets/Cards</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>10</td>
                    </tr>
                    <tr>
                    <th>5</th>
                    <td>Chargers</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>8</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>

    );
}

