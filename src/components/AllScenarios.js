import "./AllScenarios.css";
import Nav from "./Nav";
import AllScenariosBody from "./AllScenariosBody";

const AllScenarios = ()=>{

    return (
        <div className="all-scenarios"> 
            <Nav body={"All Scenarios"}/>
            <AllScenariosBody />
        </div>
    );
}

export default AllScenarios;