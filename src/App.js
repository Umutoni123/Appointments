
import './App.css';
import React, { useState } from 'react';
import AppointmentForm from './Components/AppointmentForm';
import Login from './Components/Login';
import Appointments from './Components/Appointments';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Appointments />
      )}
     <AppointmentForm/>
    </div>
  );
}

export default App;
