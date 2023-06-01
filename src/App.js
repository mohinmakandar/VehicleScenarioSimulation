import './App.css';
import AddVehicle from './components/AddVehicle';
import Home from "./components/Home";
import AddScenario from './components/AddScenario';
import AllScenarios from './components/AllScenarios';
import { Route, Switch} from 'react-router-dom';
import ipConfig from "./ipConfig.json";


export const config = {
  endpoint : `http://${ipConfig.workspaceIp}:3001`,
};

function App() {

  //const []
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Home/></Route> 
        <Route exact path="/AddScenario"><AddScenario/></Route> 
        <Route exact path="/AllScenarios"><AllScenarios/></Route>
        <Route exact path="/AddVehicle"><AddVehicle/></Route>
      </Switch>
   </div>
  );
}

export default App;
