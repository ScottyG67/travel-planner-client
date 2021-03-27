import React, { useState } from 'react'
import './App.css';
import Flights from './containers/Flights'
import LoginPage from './containers/LoginPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Travel Planner</h1>
        <Flights />
        <LoginPage />
      </header>
    </div>
  );
}

export default App;
