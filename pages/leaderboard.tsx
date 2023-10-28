
import React, {useState} from "react";
import Home from "../components/NavBar"
export default function Leaderboard() {
    const [lost, setLost] = useState(true);
    const [activeTab, setActiveTab] = useState('lost')

    const handleLostTabClick = () => {
        setLost(true);
        setActiveTab('lost')
    }

    return (
        <div>
            <Home />
            <div className="tabs tabs-boxed">
                <button className="tab tab-active=false" onClick={() => handleLostTabClick()}>Lost</button> 
                <button className="tab tab-active" onClick={() => setLost(false)}>Found</button> 
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                {/* head */}
                <thead>
                    <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    {/* <th>Job</th> */}
                    <th># Items Returned</th>
                    </tr>
                </thead>
                {lost ? <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                    <th>1</th>
                    <td>Adam Ganderton</td>
                    {/* <td>Quality Control Specialist</td> */}
                    <td>14</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    {/* <td>Desktop Support Technician</td> */}
                    <td>12</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>11</td>
                    </tr>
                    <tr>
                    <th>4</th>
                    <td>Brice Swyre</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>9</td>
                    </tr>
                    <tr>
                    <th>5</th>
                    <td>Brice Swyre</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>7</td>
                    </tr>
                </tbody>
                :
                <tbody>
                    {/* row 1 */}
                    <tr className="bg-base-200">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    {/* <td>Quality Control Specialist</td> */}
                    <td>14</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    {/* <td>Desktop Support Technician</td> */}
                    <td>12</td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>11</td>
                    </tr>
                    <tr>
                    <th>4</th>
                    <td>Brice Swyre</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>9</td>
                    </tr>
                    <tr>
                    <th>5</th>
                    <td>Brice Swyre</td>
                    {/* <td>Tax Accountant</td> */}
                    <td>7</td>
                    </tr>
                </tbody>
                }
                </table>
            </div>
        </div>

    );
}

