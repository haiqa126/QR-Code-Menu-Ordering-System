import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/login", { username, password })
      .then((response) => {
        console.log(response.data);
        // Handle successful login
      })
      .catch((err) => {
        setError("Incorrect username or password");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-white p-6 rounded-lg shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 w-full"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded mb-4">
            {error}
          </div>
        )}
        <button className="bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
