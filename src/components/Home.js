import "./Home.css"
import Nav from "./Nav";
import HomeBody from "./HomeBody";

const Home=()=>{

    
    return (
        <div className="main">
           <Nav body={"Home"}/>
           <HomeBody />
        </div>
    );
}

export default Home;