import "./HomeBody.css"
const HomeBody = ()=>{

    return (
        <div className="home-section">
        <h5 className="scenario-heading">Scenario</h5>
        <select className="select-scenarios">
            <option>
                Select
            </option>
        </select>
        <table>
            <thead>
                <tr>
                    <th>Vehicle Id</th>
                    <th>Vehicle Name</th>
                    <th>PostionX</th>
                    <th>PostionY</th>
                    <th>Speed</th>
                    <th>Direction</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    1
                    </td>
                    <td>
                    2   
                    </td>
                    <td>
                    3  
                    </td>
                    <td>
                    4 
                    </td>
                    <td>
                    5
                    </td>
                    <td>
                    6 
                    </td>
                    <td>
                    7  
                    </td>
                    <td>
                    8 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}

export default HomeBody;