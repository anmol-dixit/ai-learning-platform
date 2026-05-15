import "./login.css";

import { NavLink } from "react-router-dom";

export default function Login({ setIsLogin }) {
  return (
    <div className="login-wrapper">
      <div className="login-banner">
        <h1>AI Learning Platform 🤖</h1>
        <p>Login to start your AI journey 🚀</p>
      </div>

      <div className="login-box">
        <h2>Welcome Back</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button onClick={() => setIsLogin(true)}>Login</button>

        <p>
          Don't have an account?{" "}
          <NavLink to="/signup" className="login-link">
            Register here
          </NavLink>
        </p>
      </div>
    </div>
  );
}
