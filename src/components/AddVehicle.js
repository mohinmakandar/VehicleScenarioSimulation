import "./AddVehicle.css";
import AddVehicleBody from "./AddVehicleBody";
import Nav from "./Nav";

const AddVehicle = ()=>{

    return (
        <div className="add-vehicle">
        <Nav body={"Add Vehicle"}/>
        <AddVehicleBody/>
        </div>
    );
}

export default AddVehicle;