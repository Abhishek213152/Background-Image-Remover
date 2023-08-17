// Login.js
import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="l-wrapper">
      <div className="l-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p className="sign-up-link">
            Or <Link to="/signup">Sign Up</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
