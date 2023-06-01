# Vehicle Scenario Simulation

Vehicle Scenario Simulation is a React.js application that allows users to create, manage, and simulate scenarios with multiple vehicles. The application provides an intuitive user interface to design scenarios, manage vehicles, and simulate their movements based on defined parameters.

## Features

- Create, display, update, and delete scenarios and vehicles.
- Intuitive UI/UX using React.js framework.
- Simulate vehicle movements based on direction and speed.
- Graph container to visualize the scenarios and vehicle positions.
- Validation checks to ensure proper data input.
- Data storage using json-server.
- Deployment on a platform like Vercel or Netlify.
- Public GitHub repository with code and documentation.

## Installation

To run the Vehicle Scenario Simulation application locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/vehicle-scenario-simulation.git
   ```

2. Navigate to the project directory:

   ```shell
   cd vehicle-scenario-simulation
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the json-server:

   ```shell
   json-server --watch db.json --port 8000
   ```

5. In a new terminal, start the development server:

   ```shell
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to access the application.

## Usage

1. On the sidebar, select "Create Scenario" to add a new scenario. Enter the scenario name and time.
2. Once the scenario is created, you can add vehicles to the scenario by selecting "Add Vehicle" and providing the required details such as vehicle name, initial position, speed, and direction.
3. To simulate the scenario, go to the Home page and select the desired scenario from the dropdown.
4. Click the "Start Simulation" button to begin the simulation. The vehicles will start moving based on their defined parameters.
5. If a vehicle goes outside the graph container, it will be automatically hidden.
6. You can edit or delete scenarios and vehicles using the respective options on the sidebar.

## Validation

- When adding a vehicle, the application validates that the positions are within the graph container size. Users are not allowed to add positions greater than the container size.

## Deployment

The Vehicle Scenario Simulation application is deployed on [Netlify](https://www.netlify.com/).

You can access the deployed application here: [Vehicle Scenario Simulation](https://vehiclesimulation.netlify.app/)

## Technologies Used

- React.js
- HTML
- CSS
- JavaScript
- json-server

## JSON Server Installation

To set up the json-server, follow these steps:

1. Install json-server globally:

   ```shell
   npm install -g json-server
   ```

2. Start the json-server:

   ```shell
   json-server --watch db.json --port 8000
   ```

   This will start the json-server and watch the `db.json` file for changes on port `8000`.

## Contributing

Contributions to the Vehicle Scenario Simulation project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy creating, managing, and simulating vehicle scenarios with the Vehicle Scenario Simulation application!