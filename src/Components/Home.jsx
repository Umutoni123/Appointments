import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/request-appointment">
          <button>Request an Appointment</button>
        </Link>
      </div>
    );
  };
  
  export default Home;