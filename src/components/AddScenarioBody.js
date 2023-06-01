import { useState } from "react";
import "./AddScenarioBody.css";
import { config } from "../App";
import axios from "axios";
import {useHistory} from "react-router-dom"

const AddScenarioBody = ()=>{

    const [scenarioName,setScenarioName] = useState("");
    const [scenarioTime,setScenarioTime] = useState("");
    const history = useHistory();

    const addScenario = async (scenarioName, scenarioTime)=>{

        if(areFieldsEmpty(scenarioName,scenarioTime)){
            return;
        }

        try{
            
            const newScenario = { name: scenarioName, time: scenarioTime, numberofvehicles: 0 };

            await axios.post(config.endpoint+"/scenarios",newScenario);

            alert('New Scenario Added!');
        
        }
        catch(err){
            alert(err);
        }
    }


    const handleChange = (e)=>{
        
        if(e.target.id==="scenarioName"){
           
            setScenarioName(e.target.value);
        }
        
        if(e.target.id==="scenarioTime"){
            
            if(validateTime(e.target.value)){
                setScenarioTime(e.target.value);
                return;
            }
            else{
                setScenarioTime("");
            }
            
            
        }

    }

    const resetValues = ()=>{
        setScenarioName("");
        setScenarioTime("");
    }

    const areFieldsEmpty = (scenarioName,scenarioTime)=>{
        if(scenarioName==="" || scenarioTime===""){
            alert('Required Field Empty!');
            return true;
        }
        
        return false;
    }

    const validateTime = (text)=>{
        console.log(isNaN(text));
        if(isNaN(text)){
            alert('Please Enter a Valid Number');
            return false;
        }
        else if(scenarioName===""){
            alert("Scenario is Required");
            setScenarioTime("");
            return false;
        }

        return true;
    }

    return (
        <div className="add-scenario-body">
            <form>
            <h5 className="scenario-add-heading">Scenario / add</h5>
            <h2 className="add-scenario-heading">Add Scenario</h2>
            <div className="add-scenario-inputs">
                <div>
                    <label className="label-scenario">Scenario Name</label>
                    <input type="text" id="scenarioName" value={scenarioName} onChange={(e)=>{handleChange(e);}}/>
                </div>
                <div>
                    <label className="label-scenario">Scenario Time (seconds)</label> 
                    <input type="text"id="scenarioTime" value={scenarioTime} onChange={(e)=>{handleChange(e);}}/>
                </div>
            </div>
            <div className="scenario-action-buttons">
                <button onClick={()=>{addScenario(scenarioName,scenarioTime);}}>Add</button>
                <button onClick={()=>{resetValues();}}>Reset</button>
                <button onClick={()=>{history.goBack()}}>Go Back</button>
            </div>
            </form>
        </div>
    );
}

export default AddScenarioBody;