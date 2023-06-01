import { useEffect, useState } from "react";
import "./AddVehicleBody.css";
import {useHistory} from "react-router-dom";
import axios from "axios";
import { config } from "../App";

const AddVehicleBody = ()=>{
    
    const [scenarioList, updateScenarioList] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        const init= async ()=>{
            const response = await axios.get(config.endpoint+"/scenarios");
            const data = await response.data;
            updateScenarioList(data);
        }   

        init();
    },[]);

    return (
        <div className="add-vehicle-body">
            <h5 className="vehicle-add-heading">Vehicle / add</h5>
            <h2 className="add-vehicle-heading">Add Vehicle</h2>
            <div className="add-vehicle-inputs">
                <div>
                    <label className="label-vehicle">Scenario List</label>
                    <select>
                    <option disabled selected>Select Scenarios</option>
                        {scenarioList.map((scenario)=>(
                            <option value={scenario.name}>{scenario.name}</option>
                        ))
                        }
                    </select>
                </div>
                <div>
                    <label className="label-vehicle">Vehicle Name</label> 
                    <input type="text"/>
                </div>
                <div>
                    <label className="label-vehicle">Speed</label> 
                    <input type="text"/>
                </div>
            </div>
            <div className="add-vehicle-inputs">
                <div>
                    <label className="label-vehicle">PositionX</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="label-vehicle">PositionX</label> 
                    <input type="text"/>
                </div>
                <div>
                    <label className="label-vehicle">Direction</label>
                    <select>
                        <option disabled selected>Select Direction</option>
                        <option>Towards</option>
                        <option>Backwards</option>
                        <option>Upwards</option>
                        <option>Downwards</option>
                    </select>
                </div>
            </div>
            <div className="vehicle-action-buttons">
                <button>Add</button>
                <button>Reset</button>
                <button onClick={()=>{history.goBack();}}>Go Back</button>
            </div>    
        </div>
    );
}

export default AddVehicleBody;