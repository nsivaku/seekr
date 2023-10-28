
import React, {useState} from "react";
import NavBar from "../components/NavBar"
import {storage} from '../firebase-config'

function FileUpload() {

    const handleClick = () => {
        console.log(storage)
    }

    return(
        <div className="flex items-center justify-center w-full" onClick={() => handleClick()}>
            {/* <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label> */}
        </div>         
    )
}


export default function Leaderboard() {
    const [lost, setLost] = useState(true);
    const [activeTab, setActiveTab] = useState('lost')

    const handleLostTabClick = () => {
        setLost(true);
        setActiveTab('lost')
    }

    return (
        // <div>
        //     <Home />
        //     <div className="tabs tabs-boxed">
        //         <button className="tab tab-active=false" onClick={() => handleLostTabClick()}>Lost</button> 
        //         <button className="tab tab-active" onClick={() => setLost(false)}>Found</button> 
        //     </div>
        //     <div className="overflow-x-auto">
        //         <table className="table">
        //         {/* head */}
        //         <thead>
        //             <tr>
        //             <th>Rank</th>
        //             <th>Name</th>
        //             {/* <th>Job</th> */}
        //             <th># Items Returned</th>
        //             </tr>
        //         </thead>
        //         {lost ? <tbody>
        //             {/* row 1 */}
        //             <tr className="bg-base-200">
        //             <th>1</th>
        //             <td>Adam Ganderton</td>
        //             {/* <td>Quality Control Specialist</td> */}
        //             <td>14</td>
        //             </tr>
        //             {/* row 2 */}
        //             <tr>
        //             <th>2</th>
        //             <td>Hart Hagerty</td>
        //             {/* <td>Desktop Support Technician</td> */}
        //             <td>12</td>
        //             </tr>
        //             {/* row 3 */}
        //             <tr>
        //             <th>3</th>
        //             <td>Brice Swyre</td>
        //             {/* <td>Tax Accountant</td> */}
        //             <td>11</td>
        //             </tr>
        //             <tr>
        //             <th>4</th>
        //             <td>Brice Swyre</td>
        //             {/* <td>Tax Accountant</td> */}
        //             <td>9</td>
        //             </tr>
        //             <tr>
        //             <th>5</th>
        //             <td>Brice Swyre</td>
        //             {/* <td>Tax Accountant</td> */}
        //             <td>7</td>
        //             </tr>
        //         </tbody>
        //         :
        //         <tbody>
        //             {/* row 1 */}
        //             <tr className="bg-base-200">
        //             <th>1</th>
        //             <td>Cy Ganderton</td>
        //             {/* <td>Quality Control Specialist</td> */}
        //             <td>14</td>
        //             </tr>
        //             {/* row 2 */}
        //             <tr>
        //             <th>2</th>
        //             <td>Hart Hagerty</td>
        //             {/* <td>Desktop Support Technician</td> */}
        //             <td>12</td>
        //             </tr>
        //             {/* row 3 */}
        //             <tr>
        //             <th>3</th>
        //             <td>Brice Swyre</td>
        //             {/* <td>Tax Accountant</td> */}
        //             <td>11</td>
        //             </tr>
        //             <tr>
        //             <th>4</th>
        //             <td>Brice Swyre</td>
        //             {/* <td>Tax Accountant</td> */}
        //             <td>9</td>
        //             </tr>
        //             <tr>
        //             <th>5</th>
        //             <td>Brice Swyre</td>
        //             {/* <td>Tax Accountant</td> */}
        //             <td>7</td>
        //             </tr>
        //         </tbody>
        //         }
        //         </table>
        //     </div>
        // </div>
        <div>
            <NavBar />
            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        </div>
    );
}

