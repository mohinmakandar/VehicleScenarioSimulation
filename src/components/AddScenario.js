import "./AddScenario.css";
import Nav from "./Nav";
import AddScenarioBody from "./AddScenarioBody";

const AddScenario = ()=>{

    return (
        <div className="main"> 
            <Nav body={"Add Scenario"}/>
            <AddScenarioBody />
        </div>
    );
}

export default AddScenario;