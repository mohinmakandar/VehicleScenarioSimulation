import "./AllScenariosBody.css";
import {useHistory} from "react-router-dom";

const AllScenariosBody = ()=>{

    const history = useHistory();
 
    return (
        <div className="all-scenarios-body">
            <div className="heading-section-all-scenarios">
                <h2 className="heading-all-scenarios">All Scenarios</h2>
                <div className="buttons-all-scenarios">
                    <button onClick={()=>{ history.push("/AddScenario", {from:"AllScenarios"}); }}>New Scenario</button>
                    <button onClick={()=>{ history.push("/AddVehicle",{from: "AllScenarios"});}}>Add Vehicle</button>
                    <button>Delete All</button>
                </div>
            </div>
            <div className="all-scenarios-table">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Scenario Id
                                </th>
                                <th>
                                    Scenario Name
                                </th>
                                <th>
                                    Scenario Time
                                </th>
                                <th>
                                    Number of Vehicles
                                </th>
                                <th>
                                    Add Vehicle
                                </th>
                                <th>
                                    Edit
                                </th>
                                <th>
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default AllScenariosBody;