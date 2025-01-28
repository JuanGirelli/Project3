import React, { useState } from "react";
import { login } from "../api/authAPI";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ username, password });
      setMessage("Login successful!");
      console.log(response);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Login</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  );
};

export default Login;