import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Leaderboard from './components/Leaderboard.js';

// First Leaderboard
const Headers = ["RANK", "EMPLOYEE", "TEAM", "REVENUE", "UNITS"]

const Datas = [
  [ 1, "Employee Name", "Inbound", "$8000", 15 ],
  [ 2, "Employee Name", "Inbound", "$7000", 8 ],
  [ 3, "Employee Name", "Outbound", "$8500", 11 ],
  [ 4, "Employee Name", "Inbound", "$9000", 4 ],
  [ 5, "Employee Name", "Outbound", "$5000", 6 ]
]

// Second Leaderboard
const Headers1 = ["RANK", "TEAM NAME", "POINTS"]

const Datas1 = [
  [ 1, "B team", 50 ],
  [ 2, "Aquaboys", 56 ],
  [ 3, "Berils Angels", 42 ],
  [ 4, "GrendelTeam", 39 ]
]

function App() {
    return (
        <>
        <Header title="Material-UI React Leaderboard" />
        <Leaderboard headers={Headers} datas={Datas} />
        <Leaderboard headers={Headers1} datas={Datas1} />
        </>
    );
}

export default App;