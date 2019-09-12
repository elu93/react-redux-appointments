import React from 'react';
import './App.css';
import Appointments from './components/Appointments';

function App() {
  return (
    <div>
      <h2 className="header">React Redux Appointments</h2>
      <Appointments/>
    </div>
  );
}

export default App;