import React from 'react';
//import Options from "./Front/Options";
import TechCompanies from "./Front/TechCompanies";
import './App.css'; // Ensure you import your styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="components-container">
          <TechCompanies />
          
        </div>
      </header>
    </div>
  );
}

export default App;
