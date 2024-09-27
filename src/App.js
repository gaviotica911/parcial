import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchApi1 = async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/times.json?key=5c07ee00"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const fetchApi2 = async () => {
    try {
      const response = await fetch(
        "https://my.api.mockaroo.com/info_usuario.json?key=5c07ee00"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <Home
              isAuthenticated={isAuthenticated}
              fetchApi1={fetchApi1}
              fetchApi2={fetchApi2}
            />
          }
        />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
