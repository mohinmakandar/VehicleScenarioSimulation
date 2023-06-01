import "./Nav.css";
import {Link} from "react-router-dom";

const Nav = ({body})=>{
    return (
        <div className="nav">
        <h4>
            <div className={body==="Home"?"nav-item-selected":""}><Link className="link" to="/">Home</Link></div>
            <div className={body==="Add Scenario"?"nav-item-selected":""}><Link className="link" to="/AddScenario">Add Scenario</Link></div>
            <div className={body==="All Scenarios"?"nav-item-selected":""}><Link className="link" to="/AllScenarios">All Scenarios</Link></div>
            <div className={body==="Add Vehicle"?"nav-item-selected":""}><Link className="link" to="/AddVehicle">Add Vehicle</Link></div>
        </h4>
        </div>
    );   
}

export default Nav;